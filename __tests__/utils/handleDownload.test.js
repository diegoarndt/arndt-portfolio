import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import HandleDownload from '../../utils/handleDownload';

describe('HandleDownload', () => {
  let appendChildSpy;
  let removeChildSpy;
  let clickSpy;

  beforeEach(() => {
    clickSpy = vi.fn();
    appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation(() => {});
    removeChildSpy = vi.spyOn(document.body, 'removeChild').mockImplementation(() => {});

    vi.spyOn(document, 'createElement').mockReturnValue({
      href: '',
      download: '',
      click: clickSpy,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('creates an anchor element', () => {
    HandleDownload();
    expect(document.createElement).toHaveBeenCalledWith('a');
  });

  it('sets the correct href to the resume PDF', () => {
    const mockLink = { href: '', download: '', click: clickSpy };
    document.createElement.mockReturnValue(mockLink);
    HandleDownload();
    expect(mockLink.href).toBe('/Diego_Arndt_Resume.pdf');
  });

  it('sets the correct download filename', () => {
    const mockLink = { href: '', download: '', click: clickSpy };
    document.createElement.mockReturnValue(mockLink);
    HandleDownload();
    expect(mockLink.download).toBe('Diego_Arndt_Resume.pdf');
  });

  it('appends the link to the document body', () => {
    HandleDownload();
    expect(appendChildSpy).toHaveBeenCalled();
  });

  it('triggers a click on the download link', () => {
    HandleDownload();
    expect(clickSpy).toHaveBeenCalled();
  });

  it('removes the link from the document body after clicking', () => {
    HandleDownload();
    expect(removeChildSpy).toHaveBeenCalled();
  });

  it('performs actions in the correct order: append, click, remove', () => {
    const callOrder = [];
    appendChildSpy.mockImplementation(() => callOrder.push('append'));
    clickSpy.mockImplementation(() => callOrder.push('click'));
    removeChildSpy.mockImplementation(() => callOrder.push('remove'));

    HandleDownload();
    expect(callOrder).toEqual(['append', 'click', 'remove']);
  });
});
