const fs = require('fs');

// two column
// -------------
const twoColumnWidth = 612;
const sidebarWidth = 128;
const _sidebarPaddingLeft = 10;
const _sidebarPaddingRight = 20;
const _mainColumnPaddingLeft_2col = 20;
const _mainColumnPaddingRight_2col = 10;
// > 424
const twoColumnContentWidth =
  twoColumnWidth -
  (sidebarWidth +
    _mainColumnPaddingLeft_2col +
    _mainColumnPaddingRight_2col +
    _sidebarPaddingLeft +
    _sidebarPaddingRight);

// three column
// -------------
const _mainColumnPaddingLeft_3col = 20;
const _mainColumnPaddingRight_3col = 20;
const threeColumnWidth = 611;
// > 571
const threeColumnContentWidth = threeColumnWidth - (_mainColumnPaddingLeft_3col + _mainColumnPaddingRight_3col);

const shadowSideSize = 4;
const shadowBottomSize = 6;

// article bold
// -------------
const articleBold_labelWidth = 200;
const articleBold_iconWidth = 32;
const articleBold_lineRightWidth = 30;
// > 270
const articleBold_StaticPartsWidth =
  shadowSideSize + articleBold_labelWidth + articleBold_iconWidth + articleBold_lineRightWidth + shadowSideSize;
const articleBold_ContentStaticPartsWidth = 28;

// article light big
// -----------------
const articleLightBig_labelWidth = 200;
const articleLightBig_iconWidth = 32;
const articleLightBig_lineRightWidth = 14;
const articleLightBig_StaticPartsWidth =
  shadowSideSize +
  articleLightBig_labelWidth +
  articleLightBig_iconWidth +
  articleLightBig_lineRightWidth +
  shadowSideSize;
const articleLightBig_ContentStaticPartsWidth = 24;

// article light (small)
// -----------------
const articleLight_ContentStaticPartsWidth = 24;
const articleLight_StaticPartsWidth = 180;

// article one-team
// -----------------
const articleOneTeam_ContentStaticPartsWidth = 22;

const shadowColor = 'bfbfbf';
const oneTeamColor = 'd9efff';
const spacerBottomArticles = 20;

const settings = {
  twoColumnWidth,
  sidebarWidth,
  twoColumnContentWidth,
  threeColumnWidth,
  threeColumnContentWidth,

  articleBold_labelWidth,
  articleBold_iconWidth,
  articleBold_lineRightWidth,
  articleBold_StaticPartsWidth,
  articleBold_ContentStaticPartsWidth,

  articleLightBig_labelWidth,
  articleLightBig_iconWidth,
  articleLightBig_lineRightWidth,
  articleLightBig_StaticPartsWidth,
  articleLightBig_ContentStaticPartsWidth,

  articleLight_ContentStaticPartsWidth,
  articleLight_StaticPartsWidth,

  articleOneTeam_ContentStaticPartsWidth,

  shadowSideSize,
  shadowBottomSize,

  shadowColor,
  oneTeamColor,
  spacerBottomArticles,
};

write(JSON.stringify(settings, null, 2));

function write(content) {
  const writePath = './src/data/settings.json';
  fs.writeFileSync(writePath, content);
}
