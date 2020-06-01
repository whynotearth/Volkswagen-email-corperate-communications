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
const articleBoldStaticPartsWidth =
  shadowSideSize + articleBold_labelWidth + articleBold_iconWidth + articleBold_lineRightWidth + shadowSideSize;

// article light big
// -----------------
// const articleLightBig_labelWidth = 200; // TODO: use in template
const articleLightBigStaticPartsWidth = 252;
const articleLightBigContentStaticPartsWidth = 24;
const articleLightContentStaticPartsWidth = 24;
const articleBoldContentStaticPartsWidth = 28;
const articleOneTeamContentStaticPartsWidth = 22;
const articleLightStaticPartsWidth = 180;

const shadowColor = 'bfbfbf';
const oneTeamColor = 'd9efff';
const spacerBottomArticles = 20;

const settings = {
  twoColumnWidth,
  sidebarWidth,
  twoColumnContentWidth,
  threeColumnWidth,
  threeColumnContentWidth,

  shadowSideSize,
  shadowBottomSize,

  articleBold_labelWidth,
  articleBold_iconWidth,
  articleBold_lineRightWidth,

  articleBoldStaticPartsWidth,
  articleLightBigStaticPartsWidth,
  articleLightBigContentStaticPartsWidth,
  articleLightContentStaticPartsWidth,
  articleBoldContentStaticPartsWidth,
  articleOneTeamContentStaticPartsWidth,
  articleLightStaticPartsWidth,

  shadowColor,
  oneTeamColor,
  spacerBottomArticles,
};

write(JSON.stringify(settings, null, 2));

function write(content) {
  const writePath = './src/data/settings.json';
  fs.writeFileSync(writePath, content);
}
