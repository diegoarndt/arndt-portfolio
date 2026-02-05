import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(__dirname, '../../locales');
const localeFiles = ['en.json', 'de.json', 'es.json', 'fr.json', 'pt.json'];

describe('Locale files', () => {
  const locales = {};

  localeFiles.forEach((file) => {
    locales[file] = JSON.parse(fs.readFileSync(path.join(localesDir, file), 'utf-8'));
  });

  it('all locale files exist', () => {
    localeFiles.forEach((file) => {
      expect(fs.existsSync(path.join(localesDir, file))).toBe(true);
    });
  });

  it('all locale files have the same keys as en.json', () => {
    const enKeys = Object.keys(locales['en.json']).sort();

    localeFiles
      .filter((f) => f !== 'en.json')
      .forEach((file) => {
        const keys = Object.keys(locales[file]).sort();
        expect(keys).toEqual(enKeys);
      });
  });

  it('no locale file has empty string values', () => {
    localeFiles.forEach((file) => {
      const entries = Object.entries(locales[file]);
      entries.forEach(([key, value]) => {
        expect(value, `${file} has empty value for key "${key}"`).not.toBe('');
      });
    });
  });

  it('en.json has all required navigation keys', () => {
    const requiredKeys = ['about', 'skills', 'career', 'contact'];
    requiredKeys.forEach((key) => {
      expect(locales['en.json']).toHaveProperty(key);
    });
  });

  it('en.json has all required form keys', () => {
    const requiredKeys = ['name', 'email', 'message', 'send'];
    requiredKeys.forEach((key) => {
      expect(locales['en.json']).toHaveProperty(key);
    });
  });

  it('en.json has career-related keys', () => {
    const requiredKeys = [
      'careerTitle',
      'current',
      'brazil',
      'canada',
      'usa',
      'germany',
      'humberTitle',
      'humberDescription',
      'veralogicaDescription',
      'vailTitle',
      'vailDescription',
      'furbTitle',
      'furbDescription',
      'telekomTitle',
      'telekomDescription',
      'senaiTitle',
      'senaiDescription',
    ];
    requiredKeys.forEach((key) => {
      expect(locales['en.json']).toHaveProperty(key);
    });
  });

  it('all locale files are valid JSON', () => {
    localeFiles.forEach((file) => {
      const raw = fs.readFileSync(path.join(localesDir, file), 'utf-8');
      expect(() => JSON.parse(raw)).not.toThrow();
    });
  });
});
