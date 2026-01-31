const NAV_HEIGHT = 80;
const LANDING_OFFSET = -500;
const SECTION_OFFSETS = {
  contact: -80,
  skills: -80,
  career: -80,
};

export const getScrollOffset = (targetId) => {
  if (targetId === 'landing') {
    return LANDING_OFFSET;
  }

  const extraOffset = SECTION_OFFSETS[targetId] || 0;
  return -NAV_HEIGHT - extraOffset;
};
