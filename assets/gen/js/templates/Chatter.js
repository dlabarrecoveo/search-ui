Coveo.TemplateCache.registerTemplate("MobileChatter", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:40px; vertical-align:middle\">\n      <span class=\"CoveoIcon\" data-small=\"true\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell coveo-no-wrap\" style=\"vertical-align:middle\">\n      <span class=\"CoveoChatterPostedBy\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:center; width:80px; vertical-align:middle\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n      </span>\n      <div class=\"CoveoQuickview\">\n        <span class=\"coveo-sprites-quickview\">\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <a class=\"CoveoResultLink\">\n      </a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <span class=\"CoveoChatterLikedBy\" data-nb-likes-to-render=\"1\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n      <span class=\"CoveoChatterPostAttachment\">\n      </span>\n      <span class=\"CoveoResultFolding\" data-result-template-id=\"MobileChatter\">\n      </span>\n    </div>\n  </div>\n</div>\n", "(raw.objecttype =='FeedItem' || raw.objecttype == 'FeedComment') && Coveo.DeviceUtils.isSmallScreenWidth()"), true, true)
Coveo.TemplateCache.registerTemplate("Chatter", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:5px\">\n      <span class=\"CoveoIcon\">\n      </span>\n      <div class=\"CoveoQuickview\">\n      </div>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:13px\">\n          <span class=\"CoveoChatterPostedBy\">\n          </span>\n        </div>\n        <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"font-size:18px; padding-top:5px; padding-bottom:5px\">\n          <a class=\"CoveoResultLink\">\n          </a>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-bottom:5px; padding-top:5px; font-size:13px;\">\n          <span class=\"CoveoChatterLikedBy\" data-nb-likes-to-render=\"1\">\n          </span>\n        </div>\n      </div>\n      <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\n          <span class=\"CoveoChatterPostAttachment\">\n          </span>\n          <span class=\"CoveoResultFolding\" data-result-template-id=\"FeedComment\">\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", "raw.objecttype =='FeedItem' || raw.objecttype == 'FeedComment'"), true, true)
Coveo.TemplateCache.registerTemplate("FeedComment", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-result-frame\">\n    <div class=\"coveo-result-row\">\n        <div class=\"coveo-result-cell\" style=\"width:50px;text-align:center\">\n            <span class=\"CoveoIcon\" data-small=\"true\"></span>\n            <div class=\"CoveoQuickview\"></div>\n        </div>\n        <div class=\"coveo-result-cell\">\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"font-size:13px\">\n                    <span class=\"CoveoChatterPostedBy\"></span>\n                </div>\n                <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\n                    <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"font-size:18px; padding-top:5px; padding-bottom:5px\">\n                    <a class=\"CoveoResultLink\"></a>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"padding-bottom:5px; padding-top:5px\">\n                    <span class=\"CoveoChatterLikedBy\" data-nb-likes-to-render=\"1\"></span>\n                </div>\n            </div>\n            <div class=\"coveo-result-row\">\n                <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\n                    <span class=\"CoveoChatterPostAttachment\"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"), false, false)