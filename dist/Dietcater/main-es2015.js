(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/auth.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/auth/auth.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page\">\n    <div class=\"container\">\n        <div class=\"login-part\">\n            <div class=\"logo-part-login\">\n                <img src=\"assets/images/logo.png\" alt=\"\">\n            <h3>Forgot Password</h3>\n            </div>\n           \n                <mat-form-field class=\"full-width-mat\">\n                  <input matInput   placeholder=\"Email\"> \n                </mat-form-field>\n               \n                <div class=\"form-group\">\n                  <a class=\"mt5 float-left forgot-link\" routerLink=\"/admin/login\">Back to login</a>\n                  <!-- <input class=\"btn btn-primary float-right\" type=\"submit\" value=\"Login\"> -->\n                  <input class=\"btn btn-primary float-right\" type=\"button\"  value=\"Send\">\n                  <div class=\"clearfix\"></div>\n                </div>\n            \n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/components/login/login.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/auth/components/login/login.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"login-page\">\n    <div class=\"container\">\n        <div class=\"login-part\">\n            <div class=\"logo-part-login\">\n                <img src=\"assets/images/logo.png\" alt=\"\">\n            <h3>Welcome to DietCater</h3>\n            </div>\n           \n                <mat-form-field class=\"full-width-mat\">\n                  <input matInput   placeholder=\"Email\"> \n                </mat-form-field>\n                <mat-form-field class=\"full-width-mat\">\n                  <input matInput   placeholder=\"Password\" type=\"password\"> \n                </mat-form-field>\n                <div class=\"form-group\">\n                  <a class=\"mt5 float-left forgot-link\" routerLink=\"/admin/forgot-password\">Forgot Password?</a>\n                  <!-- <input class=\"btn btn-primary float-right\" type=\"submit\" value=\"Login\"> -->\n                  <input class=\"btn btn-primary float-right\" type=\"button\" routerLink=\"/admin/my-profile\" value=\"Login\">\n                  <div class=\"clearfix\"></div>\n                </div>\n            \n        </div> \n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/components/profile/profile.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/auth/components/profile/profile.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<section class=\"main-and-sidebar-section \">\n    <div class=\"sidebar-area\">\n        <app-admin-sidebar></app-admin-sidebar>\n    </div>\n    <div class=\"content-area\">\n        <h1 class=\"page-title\">Profile</h1>\n        <div class=\"profile-section\">\n        <div class=\"profile-info-page\">\n            <!-- <div class=\"usrimg-sec\">\n              <img src=\"assets/images/default.jpg\">\n                 <input type=\"button\" data-target=\"#editprofile\" data-toggle=\"modal\" class=\"btn btn-primary mt-4 float-right\"\n                value=\"Edit Profile\">\n            </div> -->\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"usrimg-sec\">\n                       <div class=\"image-bg\">\n                        <img src=\"assets/images/default.jpg\">\n                       </div>\n                       <div class=\"usrinfo\">\n                           <strong>John Doe</strong>\n                           <p>john@gmail.com</p> \n                       </div>\n                        <!-- <strong>John Doe</strong> -->\n                        <input type=\"button\" data-target=\"#editprofile\" data-toggle=\"modal\" class=\"btn btn-primary mt-3  \"\n                          value=\"Edit Profile\">\n                          <div class=\"clearfix\"></div>\n                      </div>\n                </div>\n                <div class=\"col-sm-7\">\n                    <h3>Account Information</h3>\n                    <ul class=\"profile-info\">\n                      <li>\n                        <label>Name :</label>\n                        <p>John Doe</p>\n                      </li>\n                      <li>\n                        <label>Email :</label>\n                        <p>john@gmail.com</p>\n                      </li>\n                      <li>\n                        <label>Phone :</label>\n                        <p>9466612855</p>\n                      </li>\n                      <li>\n                        <label>Address :</label>\n                        <p>34 A Chandigarh</p>\n                      </li>\n                 \n                \n                    </ul>\n                </div>\n            </div>\n             <div class=\"clearfix\"></div>\n          </div>\n        </div>\n    </div>\n</section>\n<app-admin-footer></app-admin-footer>\n\n<div class=\"modal\" id=\"editprofile\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n  \n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Edit Profile</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n  \n        <!-- Modal body -->\n        <div class=\"modal-body\"> \n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                <div class=\"upldimgcrle\">\n  \n                  <img src=\"assets/images/default.jpg\">\n                  <i class=\"fa fa-edit uplimgedit\">\n                    <input class=\"imgupinpt\" type=\"file\" />\n                  </i>\n                </div>\n              </div>\n              <div class=\"col-sm-8\">\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <mat-form-field class=\"full-width-mat\">\n                      <input matInput placeholder=\"First Name\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <mat-form-field class=\"full-width-mat\">\n                      <input matInput placeholder=\"Last Name\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <mat-form-field class=\"full-width-mat\">\n                      <input matInput placeholder=\"Email\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <mat-form-field class=\"full-width-mat\">\n                      <input matInput placeholder=\"Phone\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-sm-12\">\n                    <mat-form-field class=\"full-width-mat\">\n                      <input matInput placeholder=\"Address\">\n                    </mat-form-field>\n                  </div>\n  \n                </div>\n              </div>\n  \n  \n  \n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"float-right text-right\">\n              <input type=\"button\" value=\"Save\" class=\"btn btn-primary mr-2\">\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n            </div>\n   \n        </div>\n  \n        <!-- Modal footer -->\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/common-pages.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/common-pages.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<section class=\"main-and-sidebar-section \">\n    <div class=\"sidebar-area\">\n        <app-admin-sidebar></app-admin-sidebar>\n    </div>\n    <div class=\"content-area\">\n        <router-outlet></router-outlet>\n\n    </div>\n</section>\n<app-admin-footer></app-admin-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">About Us</h1>\n \n  <mat-form-field class=\"full-width-mat\">\n    <input matInput   placeholder=\"Title\"> \n  </mat-form-field>\n  <label>Description</label>\n<app-ngx-editor [placeholder]=\"'Enter text here...'\" [config]=\"editorConfig\" \n[spellcheck]=\"true\"></app-ngx-editor>\n<div class=\"text-right\">\n  <input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Save\">\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"admin-careers-section\">\n    <h1 class=\"page-title\">Careers</h1> \n <div class=\"bgwhitepart\">\n    <mat-form-field class=\"full-width-mat\">\n        <input matInput   placeholder=\"Catergory\"> \n      </mat-form-field> \n      <mat-form-field class=\"full-width-mat\">\n          <input matInput   placeholder=\"Name\"> \n        </mat-form-field> \n        <mat-form-field class=\"full-width-mat\">\n          <input matInput   placeholder=\"Location\"> \n        </mat-form-field> \n    <div class=\"text-right\">\n      <input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Save\">\n    </div>   \n </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-dammam works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"admin-faq-section\">\n    <h1 class=\"page-title\">FAQs</h1> \n <div class=\"bgwhitepart\">\n    <mat-form-field class=\"full-width-mat\">\n        <input matInput   placeholder=\"Question\"> \n      </mat-form-field> \n      <mat-form-field class=\"full-width-mat\">\n        <mat-label>Answer</mat-label>\n        <textarea matInput placeholder=\"Type your answer here...\" style=\"min-height: 10rem; resize:none;\"></textarea>\n      </mat-form-field>\n     \n    <div class=\"text-right\">\n      <input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Save\">\n    </div>   \n </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-jeddah works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">Privacy Policy</h1>\n \n  <mat-form-field class=\"full-width-mat\">\n    <input matInput   placeholder=\"Title\"> \n  </mat-form-field>\n  <label>Description</label>\n<app-ngx-editor [placeholder]=\"'Enter text here...'\" [config]=\"editorConfig\" \n[spellcheck]=\"true\"></app-ngx-editor>\n<div class=\"text-right\">\n  <input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Save\">\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin-riyadh works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">Terms Of Use</h1>\n \n  <mat-form-field class=\"full-width-mat\">\n    <input matInput   placeholder=\"Title\"> \n  </mat-form-field>\n  <label>Description</label>\n<app-ngx-editor [config]=\"editorConfig\" \n[spellcheck]=\"true\"></app-ngx-editor>\n<div class=\"text-right\">\n  <input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Save\">\n</div> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/admin-footer/admin-footer.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shared/components/admin-footer/admin-footer.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-footer\">\n    <p>© 2020 Diet Cater LTD.  </p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/admin-header/admin-header.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shared/components/admin-header/admin-header.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"header-part\">\n        <div class=\"admin-logo-part\">\n            <a routerLink=\"/admin-panel\"><img src=\"assets/images/logo.png\" alt=\"\"></a>\n        </div>\n        <div class=\"admin-header-part\">\n            <div class=\"header-right-info float-right\">\n                <ul class=\"nav navbar-nav mai-top-nav header-right-menu\"> \n                  <div class=\"dropdown\">\n                    <a href=\"javascript:;\" class=\"  dropdown-toggle\" data-toggle=\"dropdown\">\n                      <img class=\"usrimghdr\" src=\"assets/images/default.jpg\" alt=\"\" width=\"35\" /> Prof.Anderson\n                    </a>\n                    <div class=\"dropdown-menu dropdown-header-top\">\n                      <a routerLink=\"/admin/my-profile\"><i class=\"fa fa-user\"></i> <span\n                          class=\"edu-icon edu-user-rounded author-log-ic\"></span> My Profile</a>\n                      <a href=\"javascript:;\" data-toggle=\"modal\" data-target=\"#changepassword\"><i class=\"fa fa-key\"></i>\n                        <span class=\"edu-icon edu-user-rounded author-log-ic\"></span> Change Password</a>\n                      <a routerLink=\"/admin/login\"><i class=\"fa fa-power-off\"></i> <span\n                          class=\"edu-icon edu-user-rounded author-log-ic\"></span> Log Out</a>\n\n                    </div>\n                  </div>\n             \n                </ul>\n              </div>\n        </div>\n    </div>\n</header>\n\n<div class=\"modal\" id=\"changepassword\">\n  <div class=\"modal-dialog  \">\n    <div class=\"modal-content\">\n\n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Change Password</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n\n      <!-- Modal body -->\n      <div class=\"modal-body\">  \n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <mat-form-field class=\"full-width-mat\">\n                    <input matInput placeholder=\"Current password\" type=\"password\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-sm-12\">\n                  <mat-form-field class=\"full-width-mat\">\n                    <input matInput placeholder=\"New password\" type=\"password\">\n                  </mat-form-field>\n                </div>\n                <div class=\"col-sm-12\">\n                  <mat-form-field class=\"full-width-mat\">\n                    <input matInput placeholder=\"Confirm password\" type=\"password\">\n                  </mat-form-field>\n                </div>\n               \n              </div> \n \n          <div class=\"clearfix\"></div>\n          <div class=\"float-right text-right\">\n            <input type=\"button\" value=\"Save\" class=\"btn btn-primary mr-2\">\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n          </div>\n \n      </div>\n\n      <!-- Modal footer -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-bg\">\n    <ul class=\"admin-sidebar-links\">\n        <li><a routerLink=\"/admin/pages/terms-and-use\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n            true}\"><i class=\"fas fa-clipboard-list\"></i> Terms Of Use</a></li>\n        <li><a routerLink=\"/admin/pages/admin-privacy-policy\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n            true}\"><i class=\"fas fa-shield-alt\"></i> Privacy Policy</a></li>\n        <li><a  routerLink=\"/admin/pages/admin-careers\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n            true}\"><i class=\"fas   fa-chart-line\"></i> Careers</a></li> \n        <li><a  routerLink=\"/admin/pages/admin-faq\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n                true}\"><i class=\"fab fa-weixin\"></i> FAQs</a></li> \n        <li><a  routerLink=\"/admin/pages/admin-about-us\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n                    true}\"><i class=\"fas fa-building\"></i> About Us</a></li> \n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/footer/footer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shared/components/footer/footer.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-section\">\n    <div class=\"top-footer\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-4 footer-part\">\n                    <h5>DietCater</h5>\n                    <ul class=\"footer-page-list\">\n                         <li><a routerLink=\"/about-us\">About Us</a></li>\n                         <li><a routerLink=\"/careers\">Careers</a></li>\n                         <li><a href=\"#\">Become a rider</a></li>\n                         <li><a href=\"#\">Add your business</a></li>\n                    </ul>\n                </div>\n                <div class=\"col-sm-4 footer-part\">\n                    <h5>Our regions</h5>\n                    <ul class=\"footer-page-list\">\n                         <li><a routerLink=\"/dammam\">Dammam</a></li>\n                         <li><a href=\"#\">Jeddah</a></li>\n                         <li><a href=\"#\">Riyadh</a></li>\n                         <li><a href=\"#\">Al Khobar</a></li>\n                    </ul>\n                     </div>\n              \n                <div class=\"col-sm-4 footer-part\">\n                    <h5>Help</h5>\n                    <ul class=\"footer-page-list\">\n                         <li><a routerLink=\"/faqs\">FAQs</a></li>\n                         <li><a routerLink=\"/terms-of-use\">Terms of use</a></li>\n                         <li><a routerLink=\"/privacy-policy\">Privacy Policy</a></li>\n                         <li><a routerLink=\"/contact-us\">Contact us</a></li>\n                    </ul>\n                \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"bottom-footer\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 copyrightcontent\">\n                    <p>© 2020 Diet Cater LTD.  </p>\n                </div>\n                <div class=\"col-sm-6 socialmedia-part\">\n                     <ul class=\"social-media-list\">\n                         <li><a href=\"#\"> <img src=\"assets/images/fb.svg\" alt=\"\"></a></li> \n                         <li><a href=\"#\"> <img src=\"assets/images/twitter.svg\" alt=\"\"></a></li> \n                         <li><a href=\"#\"> <img src=\"assets/images/instagram.svg\" alt=\"\"></a></li> \n                     </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    </footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/shared/components/header/header.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-part  \"  [ngClass]=\"{'inner-page-header' : router.url!=='/home'}\">\n    <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-md-2 col-sm-3 logo-part\"> \n       <img src=\"assets/images/logo.png\">\n       </div>\n       <div class=\"col-sm-10 navigation-part\">\n          <nav class=\"navbar navbar-expand-md navbar-light bg-light navigation\"> \n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                <ul class=\"navbar-nav\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\"  routerLink=\"/home\"\n                    routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n            true}\" (click)=\"hideMenu()\">Home <span class=\"sr-only\">(current)</span></a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\"  routerLink=\"/about-us\"\n                    routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n            true}\" (click)=\"hideMenu()\">About Us</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\"  routerLink=\"/contact-us\"\n                    routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:\n            true}\" (click)=\"hideMenu()\">Contact Us</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideMenu()\">Add your business</a>\n                    </li> \n                    <!-- <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\"><img src=\"assets/images/hder-grnicon.svg\" alt=\"\"></a>\n                    </li>  -->\n                    <li class=\"nav-item\"> \n                      <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideMenu()\">عربي</a>\n                      <!-- <div id=\"google_translate_element\"> \n                      </div> -->\n                    </li> \n                    <li class=\"nav-item\">\n\n                      <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideMenu()\"><i class=\"fa fa-shopping-bag\"></i></a>\n                    </li> \n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:;\" (click)=\"hideMenu()\">Login</a>\n                    </li> \n                </ul>\n               \n              </div>\n            </nav>\n       </div>\n       <!-- <div class=\"col-lg-4 col-md-6 col-sm-6 header-right-part ml-auto\">\n           <ul class=\"hdr-rightlist\">\n               <li><a href=\"#\"><img src=\"assets/images/hder-grnicon.svg\" alt=\"\"></a></li> \n               <li><a href=\"#\">عربي</a></li> \n               <li><a href=\"#\"> <i class=\"fa fa-shopping-bag\"></i></a></li>\n               <li><a href=\"#\">Login</a></li>\n           </ul>\n       </div> --> \n     </div>\n    </div>\n    </header> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/about-us/about-us.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/about-us/about-us.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages-content\">\n\t<section class=\"about-us-content-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-7 about-content-side\">\n\t\t\t\t\t<h2>About Us</h2>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\t\t\t\t\t\tDicta debitis beatae quis voluptas soluta assumenda accusantium laudantium dolor id at earum,\n\t\t\t\t\t\ttempore aliquam amet. Totam illo mollitia tempora accusamus praesentium.</p>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\t\t\t\t\t\tDicta debitis beatae quis voluptas soluta assumenda accusantium laudantium dolor id at earum,\n\t\t\t\t\t\ttempore aliquam amet. Totam illo mollitia tempora accusamus praesentium.</p>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n\t\t\t\t\t\tDicta debitis beatae quis voluptas soluta assumenda accusantium laudantium dolor id at earum,\n\t\t\t\t\t\ttempore aliquam amet. Totam illo mollitia tempora accusamus praesentium.</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-5 about-image-part\">\n\t\t\t\t\t<img src=\"assets/images/imageone.jpg\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<section class=\"why-choose-section\">\n\t\t<div class=\"container\">\n\t\t<div class=\"section-heading-part\">\n\t\t\t<h2>Why Choose DietCater</h2>\n\t\t\t<p>With more than 10,000 partners operating in more than 80 cities in Saudi Arabia and Bahrain, \n\t\t\t\tDietCater is the platform to order what you want, while enjoying an easy and fast ordering experience. With DietCater,\n\t\t\t\t\n\t\t\t\tyou can order from your favorite restaurants, supermarkets, pharmacies, \n\t\t\t\tand more! And choose to pay online or cash on delivery, all from the comfort of your home!</p>\n\t\t</div>\n\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t   <div class=\"row\">\n\t\t\t\t   <div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t   <div class=\"choose-part\">\n                          <div class=\"choose-icon-part\">\n\t\t\t\t\t\t\t  <i class=\"fas fa-map-marked-alt\"></i>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <h4>Select location</h4>\n\t\t\t\t\t\t  <p>Help us pinpoint your location in order to serve you better and faster.</p>\n\t\t\t\t\t   </div>\n\t\t\t\t   </div>\n\t\t\t\t   <div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t<div class=\"choose-part\">\n\t\t\t\t\t   <div class=\"choose-icon-part\">\n\t\t\t\t\t\t   <i class=\"fas fa-store\"></i>\n\t\t\t\t\t   </div>\n\t\t\t\t\t   <h4>Choose store</h4>\n\t\t\t\t\t   <p>From international established brands to local cuisine, choose from thousands of stores and restaurants.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-4\">\n\t\t\t\t\t<div class=\"choose-part\">\n\t\t\t\t\t   <div class=\"choose-icon-part\">\n\t\t\t\t\t\t   <i class=\"fas fa-cash-register\"></i>\n\t\t\t\t\t   </div>\n\t\t\t\t\t   <h4>Pay and wait</h4>\n\t\t\t\t\t   <p>Payment is easy and secure online or by cash on delivery. Order and your food will be there in no time.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t   </div>\n\t\t</div>\n\t</section>\n \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/careers/careers.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/careers/careers.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages-content\">\n\t<section class=\"career-section\">\n\t\t<section class=\"inner-page-banner-sec\">\n\t\t\t<div class=\"container\">\n\t\t\t  <div class=\"col-lg-10 offset-lg-1\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t  <div class=\"col-sm-7 inerpage-bnr-content\">\n\t\t\t\t\t<h1>Career</h1>\n\t\t\t\t\t<p>Would you like to join DietCater? why not hop on our career wagon for the ride of your life? Provided you can keep up, Here you can find current vacancies.\n\t\t\t\t\t</p>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"col-sm-5 inerpage-bnr-image\">\n\t\t\t\t\t<img src=\"assets/images/home-food.png\" alt=\"\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t  </div>\n\t\t\t</div>\n\t\t  </section>\n\t\t<div class=\"container\">\n\t\t<!-- <div class=\"section-heading-part\">\n\t\t\t<h2>Career</h2>\n\t\t\t<p>\tWould you like to join DietCater? Here you can find current vacancies </p>\n\t\t</div> -->\n\n\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"tab-content-section\">\n\t\t<div class=\"container\">\n\t\t\t<nav>\n\t\t\t\t<div class=\"nav nav-tabs justify-content-center\" id=\"nav-tab\" role=\"tablist\">\n\t\t\t\t  <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#sales\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Sales</a>\n\t\t\t\t  <a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" href=\"#growthperformance\" role=\"tab\" aria-controls=\"nav-profile\" aria-selected=\"false\">Growth & Performance</a>\n\t\t\t\t  <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#marketing\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Marketing</a>\n\t\t\t\t  <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#people\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">People</a>\n\t\t\t\t  <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#technology\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Technology</a>\n\t\t\t\t  <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" href=\"#finance\" role=\"tab\" aria-controls=\"nav-contact\" aria-selected=\"false\">Finance</a> \n\t\t\t\t</div>\n\t\t\t  </nav>\n\t\t\t  <div class=\"tab-content\" id=\"nav-tabContent\">\n\t\t\t\t<div class=\"tab-pane fade show active\" id=\"sales\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n\t\t\t\t\t<div class=\"career-tab-content\">\n\t\t\t\t\t\t<div class=\"row custom-margin\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Sales Executive (Al Qassim)</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"growthperformance\" role=\"tabpanel\" aria-labelledby=\"nav-profile-tab\">\n\t\t\t\t\t<div class=\"career-tab-content\">\n\t\t\t\t\t\t<div class=\"row custom-margin\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Customer Experience Manager</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Riyadh Province, Riyadh\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"marketing\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n\t\t\t\t\t<div class=\"career-tab-content\">\n\t\t\t\t\t\t<div class=\"row custom-margin\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Senior Creative Designer</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Riyadh Province, Riyadh\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Marketing Tech Specialist</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Riyadh Province, Riyadh\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Creative Designing Manager</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Riyadh Province, Riyadh\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"people\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n\t\t\t\t\t<div class=\"career-tab-content\">\n\t\t\t\t\t\t<div class=\"row custom-margin\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Talent Development Supervisor</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Riyadh Province, Riyadh\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>People Business Partner Manager</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Riyadh Province, Riyadh\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"technology\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n\t\t\t\t\t<div class=\"career-tab-content\">\n\t\t\t\t\t\t<div class=\"row custom-margin\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Senior Software Engineer - Backend</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"tab-pane fade\" id=\"finance\" role=\"tabpanel\" aria-labelledby=\"nav-contact-tab\">\n\t\t\t\t\t<div class=\"career-tab-content\">\n\t\t\t\t\t\t<div class=\"row custom-margin\">\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>GRC (Governance, Risk management and Compliance) Senior Specialist</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-lg-3 col-sm-4 custom-padding\">\n\t\t\t\t\t\t\t\t<div class=\"career-content\">\n\t\t\t\t\t\t\t\t\t<h4>Financial Analysis & Controlling Specialist</h4>\n\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-map-marker-alt\"></i> <span class=\"location-content\">Saudi Arabia, Al Qassim\n\t\t\t\t\t\t\t\t\t</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t </div>\n\t\t</div>\n\t\t</div>\n\t</section>\n\t\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/contact-us/contact-us.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/contact-us/contact-us.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n   <div class=\"inner-pages-content\">\n\t<section class=\"contact-page-section\">\n\t\t\n\t<div class=\"container\">\n\t\t<div class=\"section-heading-part\">\n\t\t\t<h2 class=\"pageheading\">Contact Us</h2>\n\t\t<p>Questions? Suggestions? Feel free to contact us.</p>\n\t\t</div>\n\t\t<div class=\" contactinfo-part\">\n\t\t\t<ul class=\"contact-info\">\n\t\t\t\t<li>\n\t\t\t\t\t<div class=\"continfopart\">\n\t\t\t\t\t<span class=\"iconpart\"><i class=\"fa fa-envelope-open-text\"></i></span> <div class=\"info-content\">\n\t\t\t\t\t\t<strong>Email Address</strong>\n\t\t\t\t\t\t<p><a href=\"mailto:info@dietcater.com\">Info@dietcater.com</a></p></div>\n\t\t\t\t</div></li>\n\t\t\t\t<li><div class=\"continfopart\"><span class=\"iconpart\"><i class=\"fa fa-phone-alt\"></i></span> <div class=\"info-content\"><strong>Phone Number</strong><p> +91 9455568955</p></div></div></li>\n\t\t\t\t<li class=\"addressli\"><div class=\"continfopart\"> <span class=\"iconpart\"><i class=\"fa fa-home\"></i></span> <div class=\"info-content\"><strong>Address</strong><p>Backyard building\n\t\t\t\t\tAl Yasmin, 2467, Riyadh 13326\n\t\t\t\t\tSaudi Arabia</p></div></div></li>\n\t\t\t</ul>\n\t\t</div> \n\t\t\t<div class=\" \"> \n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Phone</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>What are you?</label>\n\t\t\t\t\t\t\t\t\t\t<select class=\"selectpicker form-control\">\n\t\t\t\t\t\t\t\t\t\t\t<option>Driver </option>\n\t\t\t\t\t\t\t\t\t\t\t<option>Customer</option>\n\t\t\t\t\t\t\t\t\t\t\t<option>Store</option> \n\t\t\t\t\t\t\t\t\t\t  </select>\n\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Subject</label>\n\t\t\t\t\t\t\t\t\t\t<select class=\"selectpicker form-control\">\n\t\t\t\t\t\t\t\t\t\t\t<option>Inquiries</option>\n\t\t\t\t\t\t\t\t\t\t\t<option>Complain</option>\n\t\t\t\t\t\t\t\t\t\t\t<option>Suggestions</option>\n\t\t\t\t\t\t\t\t\t\t\t<option>Other</option>\n\t\t\t\t\t\t\t\t\t\t  </select>\n\t\t\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label>Message</label>\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Message\" style=\"resize: none;height: 140px;;;\"></textarea>\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<input type=\"button\" class=\"btn btn-primary submitbtn  float-right\" value=\"Submit\">\n\t\t\t\t \n\t\t\t\t<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912952106!2d76.69348806952557!3d30.735062644008565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1593690849514!5m2!1sen!2sin\" width=\"100%\" height=\"320\" frameborder=\"0\" style=\"border:0;margin-top:20px;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\n\t\t \n\t\t\t</div>\n\t\t\t \n\t\t\t\t\n\t</div>\n</section>\n   </div>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/dammam/dammam.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/dammam/dammam.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages-content\">\n    <section class=\"damman-section\">\n        <div class=\"container\">\n          <div class=\"section-heading-part\">\n            <h2>Districts found at Dammam</h2>\n           </div>\n    \n          <div class=\"clearfix\"></div>\n           <ul class=\"dist-list\">\n             <li><a href=\"#\">As Swaryee <i class=\"fas fa-chevron-right\"></i></a></li> \n             <li><a href=\"#\">Al Khalidiyah <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ath Thaghr <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ar Rihab <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Al Mahjar <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ar Ruwais <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">As Sabil <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ar Rabwah <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">As Swaryee <i class=\"fas fa-chevron-right\"></i></a></li> \n             <li><a href=\"#\">Al Khalidiyah <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ath Thaghr <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ar Rihab <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Al Mahjar <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ar Ruwais <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">As Sabil <i class=\"fas fa-chevron-right\"></i></a></li>\n             <li><a href=\"#\">Ar Rabwah <i class=\"fas fa-chevron-right\"></i></a></li>\n           </ul>\n        </div>\n      </section>\n \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/faqs/faqs.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/faqs/faqs.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages-content\">\n    <section class=\"faq-section\">\n      <section class=\"inner-page-banner-sec\">\n        <div class=\"container\">\n          <div class=\"col-lg-10 offset-lg-1\">\n            <div class=\"row\">\n              <div class=\"col-sm-7 inerpage-bnr-content\">\n                <h1>Frequently Asked Questions</h1>\n                <p>Here you can find most popular questions, Customer Service to reduce time to answer queries like booking policy, order status.\n                </p>\n              </div>\n              <div class=\"col-sm-5 inerpage-bnr-image\">\n                <img src=\"assets/images/home-food.png\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n      <div class=\"container\">\n       \n        <div class=\"clearfix\"></div>\n        <div class=\"row\">\n       \n          <div class=\"col-sm-10 offset-sm-1\">\n            <ul class=\"nav nav-tabs faqtabs justify-content-center\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#general\">General</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#orderrelated\">Oreder Related </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#technical\">Technical</a>\n              </li>\n            </ul>\n            <div class=\"tab-content\">\n              <div class=\"tab-pane active\" id=\"general\">\n                <h3>General</h3>\n  \n                <div class=\"wrapper center-block\">\n                  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading active\" role=\"tab\" id=\"headingOne\">\n                        <h4 class=\"panel-title\">\n                          <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"\n                            aria-expanded=\"true\" aria-controls=\"collapseOne\" class=\"collapsed\">\n                            What are DietCater working hours?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\"\n                        aria-labelledby=\"headingOne\">\n                        <div class=\"panel-body\">We are open between 8am and 2am throughout the year.\n                          However, delivery time depends on the restaurants. To enable a 24x7 food\n                          ordering service, you can place and schedule an order for delivery\n                          during our operating hours.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\" >\n                            Is DietCater a delivery company?\n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                        <div class=\"panel-body\">\n                          No. we are the one stop destination for online food ordering. Instead of calling the\n                          restaurants, we do transfer your order to the restaurants through the internet We enable you to\n                          order your favorite cuisine from different restaurants and make sure the food delivered to your\n                          doorstep. We simplify your food selection by bringing together leading restaurants in your city.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                            What is DietCater?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                        aria-labelledby=\"headingThree\">\n                        <div class=\"panel-body\">\n                          DietCater is an online food ordering website that allows you to place an order with over\n                          600+ restaurants in Saudi, & Bahrain. You can place your order in 3 simple steps. (i)select your\n                          city & delivery area (ii)pick a restaurant or a choice of cuisine (iii)place your order\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">\n                            Where is DietCater offices?\n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                        aria-labelledby=\"headingFour\">\n                        <div class=\"panel-body\">\n                          We have offices in Riyadh, Jeddah، Dammam & Manama.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">\n                            Offers Policy\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseFive\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                        aria-labelledby=\"headingFive\">\n                        <div class=\"panel-body\">\n                          1- Coupon can not be used when using the wallet in a partial or full payment method \n                          2. Two offers can not be used with some \"Coupon + Delivery Offer\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingSix\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseSix\" aria-expanded=\"false\" aria-controls=\"collapseSix\">\n                            How do you accept payments?\n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseSix\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingSix\">\n                        <div class=\"panel-body\">\n                          Currently all payments is Cash On Delivery. We will add online Payment via Credit Card & PayPal\n                          soon.\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane   fade\" id=\"orderrelated\">\n                <h3>Order Related</h3>\n  \n                <div class=\"wrapper center-block\">\n                  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading active\" role=\"tab\" id=\"headingOneorder\">\n                        <h4 class=\"panel-title\">\n                          <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOneorder\"\n                            aria-expanded=\"true\" aria-controls=\"collapseOneorder\" class=\"collapsed\">\n                            Do you have a mobile friendly website?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseOneorder\" class=\"panel-collapse collapse in\" role=\"tabpanel\"\n                        aria-labelledby=\"headingOneorder\">\n                        <div class=\"panel-body\">Yes, you will be directed to the mobile version when you access\n                          DietCater.com through your smartphone.\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingTwoorder\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseTwoorder\" aria-expanded=\"false\" aria-controls=\"collapseTwoorder\">\n                            Do you have a mobile app?\n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseTwoorder\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwoorder\">\n                        <div class=\"panel-body\">\n                          Yes we do! currently we do have an app for iOS & Android, type \"DietCater\" in the search bar\n                          of the App store or Play store. Also you can click on the following link and it will redirect\n                          you to the app downloading page Https://www.dietcater.com/gom </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingThreeorder\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseThreeorder\" aria-expanded=\"false\" aria-controls=\"collapseThreeorder\">\n                            Do you charge for the service or delivery services?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseThreeorder\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                        aria-labelledby=\"headingThreeorder\">\n                        <div class=\"panel-body\">\n                          DietCater doesn't provide the delivery, any delivery fees is taken by the restaurants or\n                          third party.\n                          Also We don’t have any charges for DietCater services. Billing is at actual restaurant\n                          prices. </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingFourorder\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseFourorder\" aria-expanded=\"false\" aria-controls=\"collapseFourorder\">\n                            Do I need to register to place an order?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseFourorder\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                        aria-labelledby=\"headingFourorder\">\n                        <div class=\"panel-body\">\n                          Do I need to register to place an order?\n  \n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\" role=\"tab\" id=\"headingFiveorder\">\n                        <h4 class=\"panel-title\">\n                          <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\"\n                            href=\"#collapseFiveorder\" aria-expanded=\"false\" aria-controls=\"collapseFiveorder\">\n                            How can I track my order status?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseFiveorder\" class=\"panel-collapse collapse\" role=\"tabpanel\"\n                        aria-labelledby=\"headingFiveorder\">\n                        <div class=\"panel-body\">\n                          You can track your order status on the top of the page right after you place the order with\n                          countdown to receive the order. you can also track it through our mobile app by clicking on the\n                          order history section. However, You can always ask through the Live Chat and will be very\n                          pleased to help you, Livechat is available on our website & all our apps.\n                        </div>\n                      </div>\n                    </div>\n                    \n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane   fade\" id=\"technical\">\n                <h3>Technical</h3>\n  \n                <div class=\"wrapper center-block\">\n                  <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading active\" role=\"tab\" id=\"headingOnetechnical\">\n                        <h4 class=\"panel-title\">\n                          <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOnetechnical\"\n                            aria-expanded=\"true\" aria-controls=\"collapseOnetechnical\" class=\"collapsed\">\n                            The site is not opening on my computer/laptop. What could be the reason?\n  \n                          </a>\n                        </h4>\n                      </div>\n                      <div id=\"collapseOnetechnical\" class=\"panel-collapse collapse in\" role=\"tabpanel\"\n                        aria-labelledby=\"headingOnetechnical\">\n                        <div class=\"panel-body\">One of the reasons could be ’browser incompatibility’ to certain browsers. Our website currently doesn't support Internet Explorer (IE) 6.0 and lower versions. Recommended browsers are IE8, IE9, Mozilla Firefox, Safari and Chrome.\n  \n                        </div>\n                      </div>\n                    </div>\n                    \n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/home/home.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"banner-section\">\n    <!-- <img class=\"banner-img\" src=\"assets/images/banner.jpg\" alt=\"\">\n    <div class=\"banner-absolute-part wow fadeInUp \">\n        <h2>+10000 restaurants</h2>\n        <h4>Order and your food delivered to doorstep...</h4>\n        <div class=\"input-group mb-1 banersearch\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search restaurant\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n              <button type=\"button\" class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></button>\n            </div>\n          </div>\n         </div> -->\n         <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 banner-part-1\">\n                   <div class=\"banner-absolute-part wow bounceInLeft \"  data-wow-duration=\"1.5s\" data-wow-delay=\".1s\">\n                       <h2>DietCater </h2>\n                       <h4>Order and your food delivered to doorstep...</h4>\n                       <div class=\"input-group mb-1 banersearch\">\n                           <input type=\"text\" class=\"form-control\" placeholder=\"Search restaurant\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n                           <div class=\"input-group-append\">\n                             <button type=\"button\" class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></button>\n                           </div>\n                         </div>\n                            </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <img src=\"assets/images/bnr-img.png\" alt=\"\">\n                </div>\n            </div>\n        </div>\n</section>\n\n<section class=\"various-cuises-section\" >\n<div class=\"container\">\n    <!-- <h2><span class=\"variousheading\">Various Cuisines</span></h2> -->\n\n    <div class=\"clearfix\"></div>\n    <div class=\"various-cuisines-slider\">\n    <ngx-slick-carousel class=\"carousel\" \n                        #slickModal=\"slick-carousel\" \n                        [config]=\"slideConfig\" >\n        <div ngxSlickItem *ngFor=\"let slide of slides\" class=\"various-slider-itempart\">\n                <img src=\"{{ slide.img }}\" alt=\"\">\n              <h5>{{slide.name}}</h5>\n        </div>\n    </ngx-slick-carousel>\n</div>\n    \n</div>\n</section>\n<section class=\"mobile-app-section  \" >\n\t<div class=\"mobile-abso-part\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-5 col-md-6 col-sm-6 mobile-app-content-part wow slideInLeft\" data-wow-duration=\"1.5s\" data-wow-delay=\".5s\">\n\t\t\t\t\t<h2>Get the mobile App</h2>\n\t\t\t\t\t<p>Download DietCater on your mobile device for a more convenient and efficient ordering and delivering process.</p>\n\t\t\t\t   <div class=\"app-linkpart\">\n\t\t\t\t\t   <a href=\"#\" class=\"appstore-link\"><i class=\"fab fa-apple\"></i> App Store</a>\n\t\t\t\t\t   <a href=\"#\" class=\"google-playlink\"> <i class=\"fab fa-google-play\"></i>Goggle Play</a>\n\t\t\t\t   </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-7 col-sm-6 mobileapp-image-part wow slideInRight\" data-wow-duration=\"1.5s\" data-wow-delay=\".5s\">\n\t\t\t\t\t<img src=\"assets/images/mobile-app.png\" alt=\"\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<section class=\"partner-section wow fadeInUp \" data-wow-duration=\"1s\" data-wow-delay=\".6s\">\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <div class=\"partner-part\">\n              \n                <div class=\"partner-content-part\">\n                    <h3> <i class=\"fa fa-briefcase\"></i> <span class=\"partner-txt\">Partner with Market Leaders</span></h3>\n                    <p>We are partners with more than 65% of restaurants in Saudi Arabia and Bahrain. \n                        Grow your business and Deliver to new customers with Diet Cater, our logistics got you covered!</p>\n             <div class=\"text-center\">\n                <a href=\"#\">Add Your Business <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\n             </div>\n                    </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"partner-part\">\n                <!-- <div class=\"partnericon-part\">\n<i class=\"fa fa-car\"></i>\n                </div> -->\n                <div class=\"partner-content-part\">\n                    <h3> <i class=\"fa fa-car\"></i> <span class=\"partner-txt\">Become a Rider</span></h3>\n                    <p>Join us a rider and increase your income, register now !</p>\n            <div class=\"text-center\">\n                <a href=\"#\">Apply as a Rider <i class=\"fa fa-arrow-alt-circle-right\"></i></a>\n            </div>\n                    </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>\n<section class=\"download-app-section\">\n<div class=\"container\">\n    <div class=\"\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 col-sm-6 download-contentpart\">\n               <h2>Download the App</h2>\n               <p>Order your food anytime, anywhere with just couple of clicks \t</p>\n               \n\n            </div>\n            <div class=\"col-lg-4 col-sm-6 ml-auto download-image-part\">\n                <!-- <img src=\"assets/images/mobile.png\" alt=\"\"> -->\n                <div class=\"app-linkpart\">\n                    <a href=\"#\" class=\"appstore-link\"><img src=\"assets/images/app-store.svg\" alt=\"\"></a>\n                    <a href=\"#\" class=\"google-playlink\"><img src=\"assets/images/googleplay.png\" alt=\"\"></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/privacy-policy/privacy-policy.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/privacy-policy/privacy-policy.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages-content\">\n    <section class=\"policy-section\">\n      \n      <div class=\"container\">\n        <div class=\"section-heading-part\">\n          <h2>Privacy Policy</h2>\n          <p>Please read with understanding before using our services</p>\n        </div>\n  \n        <div class=\"clearfix\"></div>\n        <div class=\"policy-content\">\n          <h3>Who We Are?</h3>\n          <h4>Changes to our privacy Policy </h4>\n          <p>DietCater reserves the right to alter all or any part of this Privacy Policy. Any changes thereto will be notified via the Website and, where appropriate, through e-mail notification.</p>\n          <h4>Other Websites</h4>\n          <p>Our Website may have links to other websites. This privacy policy only applies to the Website. You should therefore read the privacy policies of the other websites when you are using those sites.\n          </p>\n          <h4>Contact         </h4>\n          <p>All comments, queries and requests relating to our use of your information are welcomed and should be addressed to Help@DietCater.com</p>\n         \n         <h3>When, Why and How we collect your data</h3>\n         <h4>What information do we collect about you?</h4>\n          <p>We collect personal information from you when you order goods or services from us or use our Website. We also collect information when you complete any customer survey. Website usage information may also be collected using cookies (as defined below). DietCater will collect information that personally identifies you and/or your location, where required (this may include your name, email address, home address, telephone number, geolocation, etc.), but only when you voluntarily give it to us. We collect this information exclusively to carry out the functions offered on the Website and to provide you with offers and information about DietCater and other services we think you may be interested in. We might collect this personal information through: online food ordering; entry into competitions; subscribing to our newsletter; creating a user account; sending 'contact us' messages or other correspondence through the Website; or through advertising, research and direct marketing. We do not collect sensitive information about you.</p>\n       <h4>Cookies     </h4>\n       <p>Some information collected will not personally identify you but will instead track your use of the Website so that we can better understand how the Website is used by customers and in turn enhance and improve your experience in ordering food. We may obtain this information by use of cookies. Cookies are a small data file transferred to your device that recognizes and identifies your device and allows your device to 'remember' information from the Website for future use. Cookies do not contain any information that personally identifies you and we do not use cookies in order to obtain such information - your personal information can only be obtained by DietCater if you actively provide it to us. We may collect technical information from your mobile device or your use of our services through a mobile device, for example, location data and certain characteristics of, and performance data about your device, carrier/operating system including device and connection type, IP address, mobile payment methods, interaction with other retail technology such as use of NFC Tags, QR Codes or use of mobile vouchers. Your device and/or the web browser should allow you to refuse cookies if you wish by changing the settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit www.allaboutcookies.org.\n      </p>\n      <h4>Storage and security of your personal information     </h4>\n      <p>DietCater will use all reasonable endeavors to maintain the security of your personal information and to protect your personal information from misuse, interference and loss and against unauthorized access, modification or disclosure. DietCater will destroy any personal information it holds about you which it no longer requires under the terms of this Privacy Policy. Where you have chosen a password to access certain services of the Website, you are responsible for keeping your password confidential. We recommend not sharing your password with anyone. Due to the nature of the internet, DietCater does not provide any guarantee or warranty regarding the security of your personal information during transmission to us or storage by us and you acknowledge that you disclose your personal information to us at your own risk. Please contact us immediately if you become aware or have reason to believe there has been any unauthorized use of your personal information in connection with the Website.</p>\n       <h4>How will we use the information we collect from you?     </h4> \n       <p>You consent to DietCater collecting and using your personal information for processing and delivering the order/s placed on the Website and any other service provided through the Website. In particular, you expressly consent that DietCater may disclose your personal information, including your name, email address, physical address and telephone number to riders delivering your order, either employed by DietCater or by third parties providing delivery services to DietCater. You consent to DietCater using your personal information for advertising and direct marketing purposes in order to inform you about the Website and the goods and services it provides, or other matters that it believes will be of interest to you. DietCater may disclose your personal information, and you consent to the disclosure of your personal information, to: • other entities within the DietCater group of companies; and • third parties engaged by DietCater or other members of the DietCater group to perform functions or provide products and services on our behalf such as processing payments, mail outs, debt collection, research, statistical information, marketing and direct or indirect advertising If you would like to unsubscribe from receiving direct marketing communications from DietCater or do not want us to share your personal information with other parties, please e-mail us at Help@DietCater.com or follow the steps to unsubscribe which are presented in every communication you receive from us, requesting your personal information be removed from our mailing list. We will use reasonable endeavors to comply with your request within a reasonable period of receipt of your request. Please note that the withdrawal of any authorizations for processing of your personal information by third parties may result in us not being able to provide you with any services. DietCater reserves the right to disclose your personal information if it is required or authorized to do so by law, or, if it is reasonably necessary in its opinion to protect the rights or property of DietCater or any third party, or to avoid injury to any person. If the DietCater business is sold or merges with another entity then some or all of your personal information may be passed to a third party.</p>\n    </div>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/terms-of-use/terms-of-use.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/components/terms-of-use/terms-of-use.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages-content\">\n    <section class=\"terms-section\">\n      \n      <div class=\"container\">\n        <div class=\"section-heading-part\">\n          <h2>Terms of use</h2>\n          <p>Please read with understanding before using our services</p>\n        </div>\n  \n        <div class=\"clearfix\"></div>\n        <div class=\"terms-content\">\n        <p>DietCater.com allows its members who use the service to order from restaurants through its website.\n            DietCater.com offers you an easy way to communicate your requests to the restaurants that are displayed\n            on the website. The purpose of this site is to provide a simple and convenient service to customers and\n            connect them to restaurants in their area that can provide meals through interactive menus allowing customers\n            to choose orders and favorite dishes in an easy and fast way. We have created the site to be a comprehensive\n            electronic complex for restaurants. DietCater.com is a commercial website to deliver restaurant orders\n            through the Internet. DietCater.com does not sell or interfere in any way with the production,\n            manufacturing or preparation of any food produced in restaurants, and what this online marketplace offers to\n            users is only to provide the ability to search and find local restaurants on the site and deliver food to\n            their address and order through it.</p>\n  \n           <p> Restaurants are solely responsible for complying with laws, regulations, and standards applied in the country,\n            such as those related to the preparation, sale, marketing and safety of food. However, it is important for\n            users to understand that DietCater.com does not in any way independently confirm or endorse restaurants,\n            products, ingredients, or quality of any products or that the restaurant adheres to the laws and regulations\n            in place for food preparation as this responsibility lies with the restaurant alone.</p>\n         \n         \n          </div>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/website/website.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/website/website.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"main-content-section\">\n    <router-outlet></router-outlet> \n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/_helper/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helper/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
                window.alert(errorMessage);
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                window.alert(errorMessage);
            }
            window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    }
}


/***/ }),

/***/ "./src/app/_helper/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/_helper/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");







let JwtInterceptor = class JwtInterceptor {
    constructor(router, spinner) {
        this.router = router;
        this.spinner = spinner;
    }
    intercept(request, next) {
        this.spinner.show();
        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                if (event.body.status && event.body.status === 401) {
                    this.router.navigate(['/login']);
                    localStorage.removeItem('currentUser');
                    return;
                }
                this.spinner.hide();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((response) => {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(response);
            }
        }));
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/_services/websiteservice.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/websiteservice.service.ts ***!
  \*****************************************************/
/*! exports provided: WebsiteserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteserviceService", function() { return WebsiteserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let WebsiteserviceService = class WebsiteserviceService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BASE_URL;
    }
    getTermCondition() {
        return this.http.get(this.baseUrl + 'customerlist.json?key=7194e520');
    }
};
WebsiteserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WebsiteserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebsiteserviceService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/website/website.module */ "./src/app/modules/website/website.module.ts")).then(module => module.WebsiteModule)
    },
    { path: 'admin',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/admin-panel/auth/auth.module */ "./src/app/modules/admin-panel/auth/auth.module.ts")).then(module => module.AuthModule)
    },
    { path: 'admin/pages', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/admin-panel/common-pages/common-pages.module */ "./src/app/modules/admin-panel/common-pages/common-pages.module.ts")).then(module => module.CommonPagesModule) }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                enableTracing: false,
                scrollPositionRestoration: 'top'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'atlasdmin';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _modules_website_website_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/website/website.module */ "./src/app/modules/website/website.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_helper/jwt.interceptor */ "./src/app/_helper/jwt.interceptor.ts");
/* harmony import */ var _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_helper/error.interceptor */ "./src/app/_helper/error.interceptor.ts");
/* harmony import */ var _modules_admin_panel_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/admin-panel/auth/auth.module */ "./src/app/modules/admin-panel/auth/auth.module.ts");
/* harmony import */ var _modules_admin_panel_common_pages_common_pages_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/admin-panel/common-pages/common-pages.module */ "./src/app/modules/admin-panel/common-pages/common-pages.module.ts");














//import {LocationStrategy, HashLocationStrategy} from '@angular/common';//incate # in url
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _modules_website_website_module__WEBPACK_IMPORTED_MODULE_8__["WebsiteModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _modules_admin_panel_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _modules_admin_panel_common_pages_common_pages_module__WEBPACK_IMPORTED_MODULE_13__["CommonPagesModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helper_error_interceptor__WEBPACK_IMPORTED_MODULE_11__["HttpErrorInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helper_jwt_interceptor__WEBPACK_IMPORTED_MODULE_10__["JwtInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/admin-panel/auth/auth-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/auth-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/admin-panel/auth/components/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/admin-panel/auth/auth.component.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/modules/admin-panel/auth/components/profile/profile.component.ts");







const routes = [
    { path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"], children: [
            { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'forgot-password', component: _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
            { path: 'my-profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] }
        ] },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin-panel/auth/auth.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/auth.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/admin-panel/auth/auth.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/auth.component.ts ***!
  \************************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/modules/admin-panel/auth/auth.component.css")]
    })
], AuthComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/auth/auth.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/auth.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/admin-panel/auth/auth-routing.module.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/modules/admin-panel/auth/components/login/login.component.ts");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/modules/admin-panel/auth/auth.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forgot-password/forgot-password.component */ "./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/modules/admin-panel/auth/components/profile/profile.component.ts");









let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-part {\r\n    padding: 30px;\r\n    max-width: 400px;\r\n    margin: auto ;background:#fff; border-radius: 5px;;\r\n}\r\n.login-page { \r\n   padding-top:10%;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#8BC34A),to(#b5b5b5)) !important;\r\n    background: linear-gradient(to bottom, #8BC34A 0%,#b5b5b5 100%) !important;\r\n}\r\n.logo-part-login{text-align: center;}\r\n.logo-part-login img {\r\n    max-width: 80px;\r\n    margin-bottom: 20px;\r\n}\r\n.logo-part-login h3 {\r\n    font-weight: 600;\r\n    font-size: 25px;\r\n}\r\n.forgot-link{color:#8BC34A;margin-top:6px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1wYW5lbC9hdXRoL2NvbXBvbmVudHMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYSxDQUFDLGVBQWUsRUFBRSxrQkFBa0I7QUFDckQ7QUFDQTtHQUNHLGVBQWU7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUVYLGlHQUEwRTtJQUExRSwwRUFBMEU7QUFDOUU7QUFDQSxpQkFBaUIsa0JBQWtCLENBQUM7QUFDcEM7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBLGFBQWEsYUFBYSxDQUFDLGNBQWMsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvYXV0aC9jb21wb25lbnRzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubG9naW4tcGFydCB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogYXV0byA7YmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOiA1cHg7O1xyXG59XHJcbi5sb2dpbi1wYWdlIHsgXHJcbiAgIHBhZGRpbmctdG9wOjEwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCM4QkMzNEEpLHRvKCNiNWI1YjUpKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhCQzM0QSAwJSwjYjViNWI1IDEwMCUpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ28tcGFydC1sb2dpbnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4ubG9nby1wYXJ0LWxvZ2luIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5sb2dvLXBhcnQtbG9naW4gaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4uZm9yZ290LWxpbmt7Y29sb3I6IzhCQzM0QTttYXJnaW4tdG9wOjZweDt9Il19 */"

/***/ }),

/***/ "./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/modules/admin-panel/auth/components/forgot-password/forgot-password.component.css")]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/auth/components/login/login.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/components/login/login.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-part {\r\n    padding: 30px;\r\n    max-width: 400px;\r\n    margin: auto ;background:#fff; border-radius: 5px;;\r\n}\r\n.login-page { \r\n   padding-top:10%;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(#8BC34A),to(#b5b5b5)) !important;\r\n    background: linear-gradient(to bottom, #8BC34A 0%,#b5b5b5 100%) !important;\r\n}\r\n.logo-part-login{text-align: center;}\r\n.logo-part-login img {\r\n    max-width: 80px;\r\n    margin-bottom: 20px;\r\n}\r\n.logo-part-login h3 {\r\n    font-weight: 600;\r\n    font-size: 25px;\r\n}\r\n.forgot-link{color:#8BC34A;margin-top:6px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1wYW5lbC9hdXRoL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWEsQ0FBQyxlQUFlLEVBQUUsa0JBQWtCO0FBQ3JEO0FBQ0E7R0FDRyxlQUFlO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFFWCxpR0FBMEU7SUFBMUUsMEVBQTBFO0FBQzlFO0FBQ0EsaUJBQWlCLGtCQUFrQixDQUFDO0FBQ3BDO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQSxhQUFhLGFBQWEsQ0FBQyxjQUFjLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXBhbmVsL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbi1wYXJ0IHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIDtiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6IDVweDs7XHJcbn1cclxuLmxvZ2luLXBhZ2UgeyBcclxuICAgcGFkZGluZy10b3A6MTAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzhCQzM0QSksdG8oI2I1YjViNSkpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOEJDMzRBIDAlLCNiNWI1YjUgMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG4ubG9nby1wYXJ0LWxvZ2lue3RleHQtYWxpZ246IGNlbnRlcjt9XHJcbi5sb2dvLXBhcnQtbG9naW4gaW1nIHtcclxuICAgIG1heC13aWR0aDogODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxvZ28tcGFydC1sb2dpbiBoMyB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi5mb3Jnb3QtbGlua3tjb2xvcjojOEJDMzRBO21hcmdpbi10b3A6NnB4O30iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/auth/components/login/login.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/components/login/login.component.ts ***!
  \******************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/admin-panel/auth/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/auth/components/profile/profile.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/components/profile/profile.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-section{margin-top: 30px;}\r\n/* .usrimg-sec img{float:left;max-width:100px;} */\r\n.profile-info label{display: inline-block;width: 50%;font-size: 15px;margin-bottom: 2px;font-weight: 500;}\r\n.profile-info{padding:0px;}\r\n.profile-info li{list-style: none;padding:18px 10px;width:100%;border-radius: 4px;;}\r\n.profile-info li:nth-child(odd){background:#f5f5f5;}\r\n.profile-info p{margin-bottom: 5px; display: inline-block;    max-width: 50%;}\r\n.profile-info-page { \r\n    padding: 20px;\r\n}\r\n.profile-info-page h3 {\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    padding:10px 0px 10px;\r\n    margin-bottom: 0px;\r\n}\r\n.usrimg-sec{background:#fff; box-shadow: 1px 2px 4px #ddd;padding:50px 20px;text-align: center;border-radius: 5px;;}\r\n.usrimg-sec strong{font-weight: 500;margin-top:10px;display: block;}\r\n.usrimg-sec p{font-size:16px;}\r\n.image-bg img{max-width:100px;}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1wYW5lbC9hdXRoL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLGdCQUFnQixDQUFDO0FBQ2xDLGlEQUFpRDtBQUNqRCxvQkFBb0IscUJBQXFCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN6RyxjQUFjLFdBQVcsQ0FBQztBQUMxQixpQkFBaUIsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFO0FBQ25GLGdDQUFnQyxrQkFBa0IsQ0FBQztBQUNqRCxnQkFBZ0Isa0JBQWtCLEVBQUUscUJBQXFCLEtBQUssY0FBYyxDQUFDO0FBQzdFO0lBQ0UsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCO0FBQ0EsWUFBWSxlQUFlLEVBQUUsNEJBQTRCLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUU7QUFDbkgsbUJBQW1CLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUM7QUFDbkUsY0FBYyxjQUFjLENBQUM7QUFDN0IsY0FBYyxlQUFlLENBQUMiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluLXBhbmVsL2F1dGgvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLXNlY3Rpb257bWFyZ2luLXRvcDogMzBweDt9XHJcbi8qIC51c3JpbWctc2VjIGltZ3tmbG9hdDpsZWZ0O21heC13aWR0aDoxMDBweDt9ICovXHJcbi5wcm9maWxlLWluZm8gbGFiZWx7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiA1MCU7Zm9udC1zaXplOiAxNXB4O21hcmdpbi1ib3R0b206IDJweDtmb250LXdlaWdodDogNTAwO31cclxuLnByb2ZpbGUtaW5mb3twYWRkaW5nOjBweDt9XHJcbi5wcm9maWxlLWluZm8gbGl7bGlzdC1zdHlsZTogbm9uZTtwYWRkaW5nOjE4cHggMTBweDt3aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6IDRweDs7fVxyXG4ucHJvZmlsZS1pbmZvIGxpOm50aC1jaGlsZChvZGQpe2JhY2tncm91bmQ6I2Y1ZjVmNTt9XHJcbiAgLnByb2ZpbGUtaW5mbyBwe21hcmdpbi1ib3R0b206IDVweDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICBtYXgtd2lkdGg6IDUwJTt9ICAgXHJcbiAgLnByb2ZpbGUtaW5mby1wYWdlIHsgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5wcm9maWxlLWluZm8tcGFnZSBoMyB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzoxMHB4IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59IFxyXG4udXNyaW1nLXNlY3tiYWNrZ3JvdW5kOiNmZmY7IGJveC1zaGFkb3c6IDFweCAycHggNHB4ICNkZGQ7cGFkZGluZzo1MHB4IDIwcHg7dGV4dC1hbGlnbjogY2VudGVyO2JvcmRlci1yYWRpdXM6IDVweDs7fVxyXG4udXNyaW1nLXNlYyBzdHJvbmd7Zm9udC13ZWlnaHQ6IDUwMDttYXJnaW4tdG9wOjEwcHg7ZGlzcGxheTogYmxvY2s7fVxyXG4udXNyaW1nLXNlYyBwe2ZvbnQtc2l6ZToxNnB4O31cclxuLmltYWdlLWJnIGltZ3ttYXgtd2lkdGg6MTAwcHg7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/auth/components/profile/profile.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin-panel/auth/components/profile/profile.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/auth/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/admin-panel/auth/components/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/common-pages-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/common-pages-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CommonPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPagesRoutingModule", function() { return CommonPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_terms_and_use_terms_and_use_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/terms-and-use/terms-and-use.component */ "./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.ts");
/* harmony import */ var _components_admin_privacy_policy_admin_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-privacy-policy/admin-privacy-policy.component */ "./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.ts");
/* harmony import */ var _common_pages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-pages.component */ "./src/app/modules/admin-panel/common-pages/common-pages.component.ts");
/* harmony import */ var _components_admin_careers_admin_careers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-careers/admin-careers.component */ "./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.ts");
/* harmony import */ var _components_admin_faq_admin_faq_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-faq/admin-faq.component */ "./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.ts");
/* harmony import */ var _components_admin_about_us_admin_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-about-us/admin-about-us.component */ "./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.ts");
/* harmony import */ var _components_admin_dammam_admin_dammam_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-dammam/admin-dammam.component */ "./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.ts");
/* harmony import */ var _components_admin_jeddah_admin_jeddah_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-jeddah/admin-jeddah.component */ "./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.ts");
/* harmony import */ var _components_admin_riyadh_admin_riyadh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin-riyadh/admin-riyadh.component */ "./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.ts");












const routes = [
    { path: '', component: _common_pages_component__WEBPACK_IMPORTED_MODULE_5__["CommonPagesComponent"], children: [
            { path: 'terms-and-use', component: _components_terms_and_use_terms_and_use_component__WEBPACK_IMPORTED_MODULE_3__["TermsAndUseComponent"] },
            { path: 'admin-privacy-policy', component: _components_admin_privacy_policy_admin_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__["AdminPrivacyPolicyComponent"] },
            { path: 'admin-careers', component: _components_admin_careers_admin_careers_component__WEBPACK_IMPORTED_MODULE_6__["AdminCareersComponent"] },
            { path: 'admin-faq', component: _components_admin_faq_admin_faq_component__WEBPACK_IMPORTED_MODULE_7__["AdminFaqComponent"] },
            { path: 'admin-about-us', component: _components_admin_about_us_admin_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AdminAboutUsComponent"] },
            { path: 'admin-dammam', component: _components_admin_dammam_admin_dammam_component__WEBPACK_IMPORTED_MODULE_9__["AdminDammamComponent"] },
            { path: 'admin-jeddah', component: _components_admin_jeddah_admin_jeddah_component__WEBPACK_IMPORTED_MODULE_10__["AdminJeddahComponent"] },
            { path: 'admin-riyadh', component: _components_admin_riyadh_admin_riyadh_component__WEBPACK_IMPORTED_MODULE_11__["AdminRiyadhComponent"] },
        ] }
];
let CommonPagesRoutingModule = class CommonPagesRoutingModule {
};
CommonPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CommonPagesRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/common-pages.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/common-pages.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbW1vbi1wYWdlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/common-pages.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/common-pages.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommonPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPagesComponent", function() { return CommonPagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonPagesComponent = class CommonPagesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CommonPagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-pages',
        template: __webpack_require__(/*! raw-loader!./common-pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/common-pages.component.html"),
        styles: [__webpack_require__(/*! ./common-pages.component.css */ "./src/app/modules/admin-panel/common-pages/common-pages.component.css")]
    })
], CommonPagesComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/common-pages.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/common-pages.module.ts ***!
  \*************************************************************************/
/*! exports provided: CommonPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonPagesModule", function() { return CommonPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _common_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common-pages-routing.module */ "./src/app/modules/admin-panel/common-pages/common-pages-routing.module.ts");
/* harmony import */ var _components_terms_and_use_terms_and_use_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/terms-and-use/terms-and-use.component */ "./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.ts");
/* harmony import */ var _components_admin_privacy_policy_admin_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-privacy-policy/admin-privacy-policy.component */ "./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.ts");
/* harmony import */ var _common_pages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common-pages.component */ "./src/app/modules/admin-panel/common-pages/common-pages.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_admin_careers_admin_careers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-careers/admin-careers.component */ "./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.ts");
/* harmony import */ var _components_admin_faq_admin_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-faq/admin-faq.component */ "./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.ts");
/* harmony import */ var _components_admin_about_us_admin_about_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin-about-us/admin-about-us.component */ "./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.ts");
/* harmony import */ var _components_admin_dammam_admin_dammam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin-dammam/admin-dammam.component */ "./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.ts");
/* harmony import */ var _components_admin_jeddah_admin_jeddah_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin-jeddah/admin-jeddah.component */ "./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.ts");
/* harmony import */ var _components_admin_riyadh_admin_riyadh_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-riyadh/admin-riyadh.component */ "./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.ts");














let CommonPagesModule = class CommonPagesModule {
};
CommonPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_terms_and_use_terms_and_use_component__WEBPACK_IMPORTED_MODULE_4__["TermsAndUseComponent"], _components_admin_privacy_policy_admin_privacy_policy_component__WEBPACK_IMPORTED_MODULE_5__["AdminPrivacyPolicyComponent"], _common_pages_component__WEBPACK_IMPORTED_MODULE_6__["CommonPagesComponent"], _components_admin_careers_admin_careers_component__WEBPACK_IMPORTED_MODULE_8__["AdminCareersComponent"], _components_admin_faq_admin_faq_component__WEBPACK_IMPORTED_MODULE_9__["AdminFaqComponent"], _components_admin_about_us_admin_about_us_component__WEBPACK_IMPORTED_MODULE_10__["AdminAboutUsComponent"], _components_admin_dammam_admin_dammam_component__WEBPACK_IMPORTED_MODULE_11__["AdminDammamComponent"], _components_admin_jeddah_admin_jeddah_component__WEBPACK_IMPORTED_MODULE_12__["AdminJeddahComponent"], _components_admin_riyadh_admin_riyadh_component__WEBPACK_IMPORTED_MODULE_13__["AdminRiyadhComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _common_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommonPagesRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ]
    })
], CommonPagesModule);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvYWRtaW4tYWJvdXQtdXMvYWRtaW4tYWJvdXQtdXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: AdminAboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAboutUsComponent", function() { return AdminAboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminAboutUsComponent = class AdminAboutUsComponent {
    constructor() {
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            height: '17rem',
            minHeight: '5rem',
            // placeholder: 'Type something. Test the Editor... ',
            translate: 'no',
            "toolbar": [
                ["bold", "italic", "underline"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent"],
            ]
        };
    }
    ngOnInit() {
    }
};
AdminAboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-about-us',
        template: __webpack_require__(/*! raw-loader!./admin-about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.html"),
        styles: [__webpack_require__(/*! ./admin-about-us.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-about-us/admin-about-us.component.css")]
    })
], AdminAboutUsComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-careers-section{padding: 0px 0px 40px;margin:40px auto 0px;max-width: 800px;\r\n    border:1px solid #ddd;\r\n}\r\n\r\n.admin-careers-section .page-title{background:#75ad3f;margin-top: 0px;padding:13px 10px;border:none;color:#fff;}\r\n\r\n.bgwhitepart{padding:15px 20px 0px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1wYW5lbC9jb21tb24tcGFnZXMvY29tcG9uZW50cy9hZG1pbi1jYXJlZXJzL2FkbWluLWNhcmVlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUIscUJBQXFCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCO0lBQzlFLHFCQUFxQjtBQUN6Qjs7QUFFQSxtQ0FBbUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7O0FBQy9HLGFBQWEscUJBQXFCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbi1wYW5lbC9jb21tb24tcGFnZXMvY29tcG9uZW50cy9hZG1pbi1jYXJlZXJzL2FkbWluLWNhcmVlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1jYXJlZXJzLXNlY3Rpb257cGFkZGluZzogMHB4IDBweCA0MHB4O21hcmdpbjo0MHB4IGF1dG8gMHB4O21heC13aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5hZG1pbi1jYXJlZXJzLXNlY3Rpb24gLnBhZ2UtdGl0bGV7YmFja2dyb3VuZDojNzVhZDNmO21hcmdpbi10b3A6IDBweDtwYWRkaW5nOjEzcHggMTBweDtib3JkZXI6bm9uZTtjb2xvcjojZmZmO31cclxuLmJnd2hpdGVwYXJ0e3BhZGRpbmc6MTVweCAyMHB4IDBweH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AdminCareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCareersComponent", function() { return AdminCareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminCareersComponent = class AdminCareersComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminCareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-careers',
        template: __webpack_require__(/*! raw-loader!./admin-careers.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.html"),
        styles: [__webpack_require__(/*! ./admin-careers.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-careers/admin-careers.component.css")]
    })
], AdminCareersComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvYWRtaW4tZGFtbWFtL2FkbWluLWRhbW1hbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdminDammamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDammamComponent", function() { return AdminDammamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminDammamComponent = class AdminDammamComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminDammamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dammam',
        template: __webpack_require__(/*! raw-loader!./admin-dammam.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.html"),
        styles: [__webpack_require__(/*! ./admin-dammam.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-dammam/admin-dammam.component.css")]
    })
], AdminDammamComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-faq-section{padding: 0px 0px 40px;margin:40px auto 0px;max-width: 800px;\r\n    border:1px solid #ddd;\r\n}\r\n\r\n.admin-faq-section .page-title{background:#75ad3f;margin-top: 0px;padding:13px 10px;border:none;color:#fff;}\r\n\r\n.bgwhitepart{padding:15px 20px 0px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbi1wYW5lbC9jb21tb24tcGFnZXMvY29tcG9uZW50cy9hZG1pbi1mYXEvYWRtaW4tZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLGdCQUFnQjtJQUMxRSxxQkFBcUI7QUFDekI7O0FBRUEsK0JBQStCLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDOztBQUMzRyxhQUFhLHFCQUFxQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvYWRtaW4tZmFxL2FkbWluLWZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLWZhcS1zZWN0aW9ue3BhZGRpbmc6IDBweCAwcHggNDBweDttYXJnaW46NDBweCBhdXRvIDBweDttYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uYWRtaW4tZmFxLXNlY3Rpb24gLnBhZ2UtdGl0bGV7YmFja2dyb3VuZDojNzVhZDNmO21hcmdpbi10b3A6IDBweDtwYWRkaW5nOjEzcHggMTBweDtib3JkZXI6bm9uZTtjb2xvcjojZmZmO31cclxuLmJnd2hpdGVwYXJ0e3BhZGRpbmc6MTVweCAyMHB4IDBweH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AdminFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFaqComponent", function() { return AdminFaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminFaqComponent = class AdminFaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminFaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-faq',
        template: __webpack_require__(/*! raw-loader!./admin-faq.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.html"),
        styles: [__webpack_require__(/*! ./admin-faq.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-faq/admin-faq.component.css")]
    })
], AdminFaqComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvYWRtaW4tamVkZGFoL2FkbWluLWplZGRhaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdminJeddahComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminJeddahComponent", function() { return AdminJeddahComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminJeddahComponent = class AdminJeddahComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminJeddahComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-jeddah',
        template: __webpack_require__(/*! raw-loader!./admin-jeddah.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.html"),
        styles: [__webpack_require__(/*! ./admin-jeddah.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-jeddah/admin-jeddah.component.css")]
    })
], AdminJeddahComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvYWRtaW4tcHJpdmFjeS1wb2xpY3kvYWRtaW4tcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: AdminPrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPrivacyPolicyComponent", function() { return AdminPrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminPrivacyPolicyComponent = class AdminPrivacyPolicyComponent {
    constructor() {
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            height: '17rem',
            minHeight: '5rem',
            // placeholder: 'Type something. Test the Editor... ',
            translate: 'no',
            "toolbar": [
                ["bold", "italic", "underline"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent"],
            ]
        };
    }
    ngOnInit() {
    }
};
AdminPrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-privacy-policy',
        template: __webpack_require__(/*! raw-loader!./admin-privacy-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.html"),
        styles: [__webpack_require__(/*! ./admin-privacy-policy.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-privacy-policy/admin-privacy-policy.component.css")]
    })
], AdminPrivacyPolicyComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvYWRtaW4tcml5YWRoL2FkbWluLXJpeWFkaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AdminRiyadhComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRiyadhComponent", function() { return AdminRiyadhComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminRiyadhComponent = class AdminRiyadhComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminRiyadhComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-riyadh',
        template: __webpack_require__(/*! raw-loader!./admin-riyadh.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.html"),
        styles: [__webpack_require__(/*! ./admin-riyadh.component.css */ "./src/app/modules/admin-panel/common-pages/components/admin-riyadh/admin-riyadh.component.css")]
    })
], AdminRiyadhComponent);



/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4tcGFuZWwvY29tbW9uLXBhZ2VzL2NvbXBvbmVudHMvdGVybXMtYW5kLXVzZS90ZXJtcy1hbmQtdXNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TermsAndUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndUseComponent", function() { return TermsAndUseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TermsAndUseComponent = class TermsAndUseComponent {
    constructor() {
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            height: '17rem',
            minHeight: '5rem',
            placeholder: 'Type something. Test the Editor... ',
            translate: 'no',
            "toolbar": [
                ["bold", "italic", "underline"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent"],
            ],
        };
    }
    ngOnInit() {
    }
};
TermsAndUseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-and-use',
        template: __webpack_require__(/*! raw-loader!./terms-and-use.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.html"),
        styles: [__webpack_require__(/*! ./terms-and-use.component.css */ "./src/app/modules/admin-panel/common-pages/components/terms-and-use/terms-and-use.component.css")]
    })
], TermsAndUseComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/admin-footer/admin-footer.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/components/admin-footer/admin-footer.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-footer{position: fixed;width:100%;padding:5px 0px; text-align: center;bottom:0px;background: #75ad3f;z-index: 999;}\r\n.admin-footer p{color:#fff; margin:0px;font-size:15px;font-weight: 500;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1mb290ZXIvYWRtaW4tZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxlQUFlLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDO0FBQ3pILGdCQUFnQixVQUFVLEVBQUUsVUFBVSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4tZm9vdGVyL2FkbWluLWZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLWZvb3Rlcntwb3NpdGlvbjogZml4ZWQ7d2lkdGg6MTAwJTtwYWRkaW5nOjVweCAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtib3R0b206MHB4O2JhY2tncm91bmQ6ICM3NWFkM2Y7ei1pbmRleDogOTk5O31cclxuLmFkbWluLWZvb3RlciBwe2NvbG9yOiNmZmY7IG1hcmdpbjowcHg7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6IDUwMDt9Il19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/admin-footer/admin-footer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/admin-footer/admin-footer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminFooterComponent", function() { return AdminFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminFooterComponent = class AdminFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-footer',
        template: __webpack_require__(/*! raw-loader!./admin-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/admin-footer/admin-footer.component.html"),
        styles: [__webpack_require__(/*! ./admin-footer.component.css */ "./src/app/modules/shared/components/admin-footer/admin-footer.component.css")]
    })
], AdminFooterComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/admin-header/admin-header.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shared/components/admin-header/admin-header.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header-part{display:-webkit-box;display:flex;background: #75ad3f;;}\r\n.header-right-info {\r\n    margin-top: 13px;\r\n}\r\n.usrimghdr {\r\n    background: #fff;\r\n    padding: 2px;\r\n    border-radius: 50%;\r\n}\r\n.header-right-info .navbar-nav>li .dropdown-menu {\r\n    border: 0px solid #ccc;\r\n    border: 0px solid rgba(0,0,0,.15);\r\n    box-shadow: 0 1px 4px rgba(0,0,0,.175);\r\n}\r\n.admin-logo-part{width:15%;padding-right:15px;text-align: center;background: #fff;;}\r\n.admin-header-part{width:86%;padding-right:15px;}\r\n.dropdown-header-top{position: relative;-webkit-transform:translate3d(0px, 45px, 0px) !important;transform:translate3d(0px, 45px, 0px) !important;}\r\n.dropdown-header-top::before{position: absolute;content:\"\";right:5px;top:-8px;width:8px;height:8px; border-bottom:10px solid #fff;border-right: 8px solid transparent;border-left: 8px solid transparent;}\r\n.dropdown-header-top a {\r\n    display: block;color: #333;\r\n    padding: 5px 10px;\r\n    font-size: 14px;\r\n}\r\n.dropdown-header-top a:hover, .dropdown-header-top a .active{background: #fbfbfb;}\r\n.mai-top-nav a.dropdown-toggle {\r\n    color: #fff;\r\n}\r\n.admin-logo-part img {\r\n    max-width: 50px;margin:3px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGFBQWEsbUJBQVksQ0FBWixZQUFZLENBQUMsbUJBQW1CLEVBQUU7QUFDL0M7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0lBRWpDLHNDQUFzQztBQUMxQztBQUNBLGlCQUFpQixTQUFTLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUU7QUFDbkYsbUJBQW1CLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztBQUVoRCxxQkFBcUIsa0JBQWtCLENBQUMsd0RBQWdELENBQWhELGdEQUFnRCxDQUFDO0FBQ3pGLDZCQUE2QixrQkFBa0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLDZCQUE2QixDQUFDLG1DQUFtQyxDQUFDLGtDQUFrQyxDQUFDO0FBQ3pNO0lBQ0ksY0FBYyxDQUFDLFdBQVc7SUFDMUIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQSw2REFBNkQsbUJBQW1CLENBQUM7QUFDakY7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWUsQ0FBQyxjQUFjO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1oZWFkZXIvYWRtaW4taGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhlYWRlci1wYXJ0e2Rpc3BsYXk6ZmxleDtiYWNrZ3JvdW5kOiAjNzVhZDNmOzt9XHJcbi5oZWFkZXItcmlnaHQtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG59XHJcbi51c3JpbWdoZHIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaGVhZGVyLXJpZ2h0LWluZm8gLm5hdmJhci1uYXY+bGkgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLDAsMCwuMTc1KTtcclxufVxyXG4uYWRtaW4tbG9nby1wYXJ0e3dpZHRoOjE1JTtwYWRkaW5nLXJpZ2h0OjE1cHg7dGV4dC1hbGlnbjogY2VudGVyO2JhY2tncm91bmQ6ICNmZmY7O31cclxuLmFkbWluLWhlYWRlci1wYXJ0e3dpZHRoOjg2JTtwYWRkaW5nLXJpZ2h0OjE1cHg7fVxyXG5cclxuLmRyb3Bkb3duLWhlYWRlci10b3B7cG9zaXRpb246IHJlbGF0aXZlO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwcHgsIDQ1cHgsIDBweCkgIWltcG9ydGFudDt9XHJcbi5kcm9wZG93bi1oZWFkZXItdG9wOjpiZWZvcmV7cG9zaXRpb246IGFic29sdXRlO2NvbnRlbnQ6XCJcIjtyaWdodDo1cHg7dG9wOi04cHg7d2lkdGg6OHB4O2hlaWdodDo4cHg7IGJvcmRlci1ib3R0b206MTBweCBzb2xpZCAjZmZmO2JvcmRlci1yaWdodDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7fVxyXG4uZHJvcGRvd24taGVhZGVyLXRvcCBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO2NvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmRyb3Bkb3duLWhlYWRlci10b3AgYTpob3ZlciwgLmRyb3Bkb3duLWhlYWRlci10b3AgYSAuYWN0aXZle2JhY2tncm91bmQ6ICNmYmZiZmI7fVxyXG4ubWFpLXRvcC1uYXYgYS5kcm9wZG93bi10b2dnbGUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmFkbWluLWxvZ28tcGFydCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O21hcmdpbjozcHggMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/admin-header/admin-header.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/admin-header/admin-header.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminHeaderComponent = class AdminHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-header',
        template: __webpack_require__(/*! raw-loader!./admin-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/admin-header/admin-header.component.html"),
        styles: [__webpack_require__(/*! ./admin-header.component.css */ "./src/app/modules/shared/components/admin-header/admin-header.component.css")]
    })
], AdminHeaderComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-sidebar-links{padding:0px;min-height: 80vh;background:#fff;;}\r\n.admin-sidebar-links li{list-style: none;;}\r\n.admin-sidebar-links li a{padding:9px 10px;font-size:15px; color:#333;display: block;;}\r\n.admin-sidebar-links li a .fas, .admin-sidebar-links li a .fab{margin-right: 10px;;}\r\n.admin-sidebar-links li a:hover,.admin-sidebar-links li a.active{background:#f5f5f5;color:#75ad3f}\r\n.sidebar-bg{background:#f5f5f5;padding:5px 10px;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUIsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRTtBQUNuRSx3QkFBd0IsZ0JBQWdCLEVBQUU7QUFDMUMsMEJBQTBCLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsY0FBYyxFQUFFO0FBQ3RGLCtEQUErRCxrQkFBa0IsRUFBRTtBQUNuRixpRUFBaUUsa0JBQWtCLENBQUMsYUFBYTtBQUNqRyxZQUFZLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1zaWRlYmFyLWxpbmtze3BhZGRpbmc6MHB4O21pbi1oZWlnaHQ6IDgwdmg7YmFja2dyb3VuZDojZmZmOzt9XHJcbi5hZG1pbi1zaWRlYmFyLWxpbmtzIGxpe2xpc3Qtc3R5bGU6IG5vbmU7O31cclxuLmFkbWluLXNpZGViYXItbGlua3MgbGkgYXtwYWRkaW5nOjlweCAxMHB4O2ZvbnQtc2l6ZToxNXB4OyBjb2xvcjojMzMzO2Rpc3BsYXk6IGJsb2NrOzt9XHJcbi5hZG1pbi1zaWRlYmFyLWxpbmtzIGxpIGEgLmZhcywgLmFkbWluLXNpZGViYXItbGlua3MgbGkgYSAuZmFie21hcmdpbi1yaWdodDogMTBweDs7fVxyXG4uYWRtaW4tc2lkZWJhci1saW5rcyBsaSBhOmhvdmVyLC5hZG1pbi1zaWRlYmFyLWxpbmtzIGxpIGEuYWN0aXZle2JhY2tncm91bmQ6I2Y1ZjVmNTtjb2xvcjojNzVhZDNmfVxyXG4uc2lkZWJhci1iZ3tiYWNrZ3JvdW5kOiNmNWY1ZjU7cGFkZGluZzo1cHggMTBweDt9Il19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminSidebarComponent = class AdminSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-sidebar',
        template: __webpack_require__(/*! raw-loader!./admin-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.css")]
    })
], AdminSidebarComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/footer/footer.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/components/footer/footer.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-footer{padding:40px 0px;background:#fff;border-top: 2px solid #7fd82a;}\r\n    .footer-part h5{font-size:20px; ;font-weight: 600;padding-bottom:10px;\r\n        ;margin-bottom: 20px;color:#333;position: relative;border-bottom: 1px solid #ddd;}\r\n    .footer-part h5::after{content:\"\";position: absolute;left:0; bottom:-1px;height:2px; background: #7fd82a;\r\n        width:70px;z-index: 99;}\r\n    .footer-page-list {padding:0px;}\r\n    .footer-page-list li{display: block;}\r\n    .footer-page-list li a{padding:5px 0px 5px 20px;color:#333;font-size: 14px;display: inline-block;position: relative;}\r\n    .footer-page-list li a::before {\r\n        content: \"\";\r\n        width: 8px;\r\n        height: 8px;\r\n            position: absolute;\r\n        left: 2px;\r\n        top: 34%;\r\n        border-bottom: 2px solid #7fd82a;\r\n        border-right: 2px solid #7fd82a;\r\n        padding: 2px;\r\n        -webkit-transform: rotate(-40deg);\r\n                transform: rotate(-40deg);\r\n    }\r\n    .footer-page-list li a:hover{color:#333;}\r\n    .viewall-link{font-weight: 600;color: #fff;;}\r\n    .viewall-link:hover{color:#fff;}\r\n    .bottom-footer{background: #000;padding:7px 0px;;}\r\n    .copyrightcontent p{margin-bottom: 0px;font-size:13px;color:#fff; margin-top: 5px;;}\r\n    .social-media-list{padding:0px;text-align: right;margin:0px;}\r\n    .social-media-list li{list-style: none;display: inline-block;margin-left:10px;}\r\n    @media screen and (max-width:576px){ \r\n    .app-linkpart{margin-bottom:30px;}\r\n    .top-footer{padding-top: 20px;;}\r\n    .download-image-part .app-linkpart {\r\n        text-align: left;    margin-bottom: 0;\r\n    }\r\n    .footer-part h5{margin-bottom:10px;}\r\n    .footer-part{margin-top:20px;width:50%;}\r\n    .copyrightcontent,.social-media-list{margin:5px 0px;text-align: center;}\r\n    \r\n    }\r\n     \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsNkJBQTZCLENBQUM7SUFDdkUsZ0JBQWdCLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUI7U0FDaEUsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDO0lBRXJGLHVCQUF1QixVQUFVLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxVQUFVLEVBQUUsbUJBQW1CO1FBQ3BHLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFFM0IsbUJBQW1CLFdBQVcsQ0FBQztJQUMvQixxQkFBcUIsY0FBYyxDQUFDO0lBQ3BDLHVCQUF1Qix3QkFBd0IsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDO0lBRXBIO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixXQUFXO1lBQ1Asa0JBQWtCO1FBQ3RCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsZ0NBQWdDO1FBQ2hDLCtCQUErQjtRQUMvQixZQUFZO1FBQ1osaUNBQXlCO2dCQUF6Qix5QkFBeUI7SUFDN0I7SUFDQSw2QkFBNkIsVUFBVSxDQUFDO0lBQzVDLGNBQWMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFO0lBQzVDLG9CQUFvQixVQUFVLENBQUM7SUFDM0IsZUFBZSxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUU7SUFDakQsb0JBQW9CLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFO0lBR25GLG1CQUFtQixXQUFXLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBQzVELHNCQUFzQixnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztJQUU5RTtJQUNBLGNBQWMsa0JBQWtCLENBQUM7SUFDakMsWUFBWSxpQkFBaUIsRUFBRTtJQUMvQjtRQUNJLGdCQUFnQixLQUFLLGdCQUFnQjtJQUN6QztJQUNBLGdCQUFnQixrQkFBa0IsQ0FBQztJQUNuQyxhQUFhLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFDdkMscUNBQXFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQzs7SUFFdkUiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3AtZm9vdGVye3BhZGRpbmc6NDBweCAwcHg7YmFja2dyb3VuZDojZmZmO2JvcmRlci10b3A6IDJweCBzb2xpZCAjN2ZkODJhO31cclxuICAgIC5mb290ZXItcGFydCBoNXtmb250LXNpemU6MjBweDsgO2ZvbnQtd2VpZ2h0OiA2MDA7cGFkZGluZy1ib3R0b206MTBweDtcclxuICAgICAgICA7bWFyZ2luLWJvdHRvbTogMjBweDtjb2xvcjojMzMzO3Bvc2l0aW9uOiByZWxhdGl2ZTtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDt9XHJcbiAgICAgICBcclxuICAgIC5mb290ZXItcGFydCBoNTo6YWZ0ZXJ7Y29udGVudDpcIlwiO3Bvc2l0aW9uOiBhYnNvbHV0ZTtsZWZ0OjA7IGJvdHRvbTotMXB4O2hlaWdodDoycHg7IGJhY2tncm91bmQ6ICM3ZmQ4MmE7XHJcbiAgICAgICAgd2lkdGg6NzBweDt6LWluZGV4OiA5OTt9XHJcbiAgICAgIFxyXG4gICAgLmZvb3Rlci1wYWdlLWxpc3Qge3BhZGRpbmc6MHB4O31cclxuICAgIC5mb290ZXItcGFnZS1saXN0IGxpe2Rpc3BsYXk6IGJsb2NrO31cclxuICAgIC5mb290ZXItcGFnZS1saXN0IGxpIGF7cGFkZGluZzo1cHggMHB4IDVweCAyMHB4O2NvbG9yOiMzMzM7Zm9udC1zaXplOiAxNHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jaztwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4gICAgXHJcbiAgICAuZm9vdGVyLXBhZ2UtbGlzdCBsaSBhOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDJweDtcclxuICAgICAgICB0b3A6IDM0JTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzdmZDgyYTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjN2ZkODJhO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlci1wYWdlLWxpc3QgbGkgYTpob3Zlcntjb2xvcjojMzMzO31cclxuLnZpZXdhbGwtbGlua3tmb250LXdlaWdodDogNjAwO2NvbG9yOiAjZmZmOzt9XHJcbi52aWV3YWxsLWxpbms6aG92ZXJ7Y29sb3I6I2ZmZjt9XHJcbiAgICAuYm90dG9tLWZvb3RlcntiYWNrZ3JvdW5kOiAjMDAwO3BhZGRpbmc6N3B4IDBweDs7fVxyXG4gICAgLmNvcHlyaWdodGNvbnRlbnQgcHttYXJnaW4tYm90dG9tOiAwcHg7Zm9udC1zaXplOjEzcHg7Y29sb3I6I2ZmZjsgbWFyZ2luLXRvcDogNXB4Ozt9XHJcblxyXG5cclxuICAgIC5zb2NpYWwtbWVkaWEtbGlzdHtwYWRkaW5nOjBweDt0ZXh0LWFsaWduOiByaWdodDttYXJnaW46MHB4O31cclxuICAgIC5zb2NpYWwtbWVkaWEtbGlzdCBsaXtsaXN0LXN0eWxlOiBub25lO2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tbGVmdDoxMHB4O31cclxuIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7IFxyXG4gICAgLmFwcC1saW5rcGFydHttYXJnaW4tYm90dG9tOjMwcHg7fVxyXG4gICAgLnRvcC1mb290ZXJ7cGFkZGluZy10b3A6IDIwcHg7O31cclxuICAgIC5kb3dubG9hZC1pbWFnZS1wYXJ0IC5hcHAtbGlua3BhcnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLXBhcnQgaDV7bWFyZ2luLWJvdHRvbToxMHB4O31cclxuICAgIC5mb290ZXItcGFydHttYXJnaW4tdG9wOjIwcHg7d2lkdGg6NTAlO31cclxuICAgIC5jb3B5cmlnaHRjb250ZW50LC5zb2NpYWwtbWVkaWEtbGlzdHttYXJnaW46NXB4IDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICAgIl19 */"

/***/ }),

/***/ "./src/app/modules/shared/components/footer/footer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/footer/footer.component.ts ***!
  \**********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $(".header-part").addClass("fixed-header");
                $('.navbar-collapse').removeClass('show');
            }
            else {
                $(".header-part").removeClass("fixed-header");
            }
        });
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/modules/shared/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/header/header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/components/header/header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-part {\r\n    padding: 10px 0px;\r\n    /* position: fixed; */\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n    background:#fff;\r\n    /* background: rgba(255,255,255,0.3); */\r\n    z-index: 999;\r\n    width: 100%; position: fixed;\r\n    /* border-bottom: 1px solid #fff; */\r\n}\r\n.fixed-header{position: fixed;-webkit-transition: .5s;transition: .5s;}\r\n.fixed-header,.inner-page-header{background:#fff;box-shadow: 0px 0px 4px #ccc;}\r\n.fixed-header .navbar-light .navbar-nav .nav-link, .inner-page-header .navbar-light .navbar-nav .nav-link{color:#000;}\r\n.logo-part img {\r\n    max-width: 70px;\r\n}\r\n.navigation {background:none !important;margin-top: 13px;float:right;}\r\n.navbar-nav li a{color: #333;\r\n    font-size: 16px;padding:5px 17px  ;\r\n    /* font-weight: 500; */\r\n}\r\n.navbar-light .navbar-nav .nav-link {\r\n        color: #333;\r\n    }\r\n.navbar-nav li a{cursor: pointer;}\r\n.navbar-nav li a.active,.navbar-nav li a.active:hover,.navbar-nav li a:hover{color: #91f333 !important;}\r\n.hdr-rightlist{float:right;padding:0px;margin-top:23px;}\r\n.hdr-rightlist li{list-style:none;display:inline-block}\r\n.hdr-rightlist li a{padding:0px 20px;display: block;color:#333;font-size:15px;font-weight: 500;border-right: 1px solid #ccc;}\r\n.hdr-rightlist li:last-child a{border:none; padding-right:0px;}\r\n.hdr-rightlist li a:hover{color:#8cc357}\r\n@media screen and (max-width:1100px){\r\n    .navbar-nav li a{font-size: 15px;padding: 5px 15px ;}\r\n  \r\n}\r\n@media screen and (max-width:992px){ \r\n    .navbar-nav li a {\r\n        font-size: 14px;\r\n        padding: 5px 9px !important ;\r\n        font-weight: normal;\r\n    }\r\n    \r\n}\r\n@media screen and (max-width:767px){\r\n\r\n.navbar-toggler-icon {       \r\n    width: 1.1em;\r\n    height: 1.1em;\r\n}\r\n\r\n.navigation{float:none;width:100%;margin-top: 0px;padding-right:0px;;}\r\n.fixed-header .navbar-light .navbar-nav .nav-link, .inner-page-header .navbar-light .navbar-nav .nav-link {\r\n    color: #fff;\r\n}\r\n.navbar-light .navbar-nav .nav-link {color:#fff;}\r\n.navigation-part {\r\n    float: right;\r\n    width: 62%;\r\n    -webkit-box-flex: 0;\r\n            flex: 0 0 75%;\r\n}\r\n.logo-part {\r\n    float: left;\r\n    width: 100px;\r\n}\r\n.logo-part img {\r\n    max-width: 50px;\r\n}\r\n.navbar-toggler {\r\n    background: #fff;\r\n    float: right;\r\n}\r\n.navigation{text-align: right;display: inline-block;    padding-bottom: 0;\r\n    margin-top: 5px;}\r\n        .navigation .navbar-collapse { \r\n            margin-top: 40px;\r\n            background: rgba(0,0,0,0.9);    position: absolute;\r\n            width: 100%; padding-right: 10px;\r\n            z-index: 999;  right:-110%;\r\n            -webkit-transition: right 0.3s ease;\r\n            transition: right 0.3s ease;  \r\n            \r\n        } \r\n        .navigation .navbar-collapse.show{right:0px;\r\n            display: block;\r\n            height:220px !important;\r\n            -webkit-transition: right 0.3s ease-in;\r\n            transition: right 0.3s ease-in;\r\n        }\r\n        /* .fixed-header   .navigation .navbar-collapse.show{display:none; } */\r\n}\r\n@media screen and (max-width:576px){\r\n    \r\n    .header-right-part {\r\n        float: right;\r\n        width: 70%;    \r\n    }\r\n    .hdr-rightlist li a {\r\n        padding: 0px 13px;}\r\n     \r\n        .navigation-part {\r\n            float: right;\r\n            width: 80%;-webkit-box-flex: 60%;flex: 60%;\r\n        }\r\n         \r\n}\r\n@media screen and (max-width:320px){\r\n  \r\n    .hdr-rightlist li a {\r\n        padding: 0px 9px;\r\n    }\r\n    .header-right-part {\r\n        float: right;\r\n        width: 68%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHVCQUFlO0lBQWYsZUFBZTtJQUNmLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsWUFBWTtJQUNaLFdBQVcsRUFBRSxlQUFlO0lBQzVCLG1DQUFtQztBQUN2QztBQUNBLGNBQWMsZUFBZSxDQUFDLHVCQUFlLENBQWYsZUFBZSxDQUFDO0FBQzlDLGlDQUFpQyxlQUFlLENBQUMsNEJBQTRCLENBQUM7QUFDOUUsMEdBQTBHLFVBQVUsQ0FBQztBQUNwSDtJQUNHLGVBQWU7QUFDbkI7QUFDQSxhQUFhLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztBQUNyRSxpQkFBaUIsV0FBVztJQUN4QixlQUFlLENBQUMsa0JBQWtCO0lBQ2xDLHNCQUFzQjtBQUMxQjtBQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0EsaUJBQWlCLGVBQWUsQ0FBQztBQUNqQyw2RUFBNkUseUJBQXlCLENBQUM7QUFDM0csZUFBZSxXQUFXLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztBQUN2RCxrQkFBa0IsZUFBZSxDQUFDLG9CQUFvQjtBQUN0RCxvQkFBb0IsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUM7QUFDNUgsK0JBQStCLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztBQUM5RCwwQkFBMEIsYUFBYTtBQUV2QztJQUNJLGlCQUFpQixlQUFlLENBQUMsa0JBQWtCLENBQUM7O0FBRXhEO0FBQ0E7SUFDSTtRQUNJLGVBQWU7UUFDZiw0QkFBNEI7UUFDNUIsbUJBQW1CO0lBQ3ZCOztBQUVKO0FBRUE7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQSxZQUFZLFVBQVUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFO0FBQ3JFO0lBQ0ksV0FBVztBQUNmO0FBQ0EscUNBQXFDLFVBQVUsQ0FBQztBQUNoRDtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsbUJBQWE7WUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQSxZQUFZLGlCQUFpQixDQUFDLHFCQUFxQixLQUFLLGlCQUFpQjtJQUNyRSxlQUFlLENBQUM7UUFDWjtZQUNJLGdCQUFnQjtZQUNoQiwyQkFBMkIsS0FBSyxrQkFBa0I7WUFDbEQsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxZQUFZLEdBQUcsV0FBVztZQUMxQixtQ0FBbUM7WUFHbkMsMkJBQTJCOztRQUUvQjtRQUNBLGtDQUFrQyxTQUFTO1lBQ3ZDLGNBQWM7WUFDZCx1QkFBdUI7WUFDdkIsc0NBQXNDO1lBR3RDLDhCQUE4QjtRQUNsQztRQUNBLHNFQUFzRTtBQUM5RTtBQUNBOztJQUVJO1FBQ0ksWUFBWTtRQUNaLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCLENBQUM7O1FBRWxCO1lBQ0ksWUFBWTtZQUNaLFVBQVUsQ0FBQyxxQkFBUyxDQUFULFNBQVM7UUFDeEI7O0FBRVI7QUFFQTs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXBhcnQge1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7ICovXHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICB3aWR0aDogMTAwJTsgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7ICovXHJcbn1cclxuLmZpeGVkLWhlYWRlcntwb3NpdGlvbjogZml4ZWQ7dHJhbnNpdGlvbjogLjVzO31cclxuLmZpeGVkLWhlYWRlciwuaW5uZXItcGFnZS1oZWFkZXJ7YmFja2dyb3VuZDojZmZmO2JveC1zaGFkb3c6IDBweCAwcHggNHB4ICNjY2M7fVxyXG4uZml4ZWQtaGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLCAuaW5uZXItcGFnZS1oZWFkZXIgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmt7Y29sb3I6IzAwMDt9XHJcbiAubG9nby1wYXJ0IGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDcwcHg7XHJcbn1cclxuLm5hdmlnYXRpb24ge2JhY2tncm91bmQ6bm9uZSAhaW1wb3J0YW50O21hcmdpbi10b3A6IDEzcHg7ZmxvYXQ6cmlnaHQ7fVxyXG4ubmF2YmFyLW5hdiBsaSBhe2NvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O3BhZGRpbmc6NXB4IDE3cHggIDtcclxuICAgIC8qIGZvbnQtd2VpZ2h0OiA1MDA7ICovXHJcbn1cclxuICAgIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IGxpIGF7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIC5uYXZiYXItbmF2IGxpIGEuYWN0aXZlLC5uYXZiYXItbmF2IGxpIGEuYWN0aXZlOmhvdmVyLC5uYXZiYXItbmF2IGxpIGE6aG92ZXJ7Y29sb3I6ICM5MWYzMzMgIWltcG9ydGFudDt9XHJcbi5oZHItcmlnaHRsaXN0e2Zsb2F0OnJpZ2h0O3BhZGRpbmc6MHB4O21hcmdpbi10b3A6MjNweDt9XHJcbi5oZHItcmlnaHRsaXN0IGxpe2xpc3Qtc3R5bGU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9ja31cclxuLmhkci1yaWdodGxpc3QgbGkgYXtwYWRkaW5nOjBweCAyMHB4O2Rpc3BsYXk6IGJsb2NrO2NvbG9yOiMzMzM7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6IDUwMDtib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO31cclxuLmhkci1yaWdodGxpc3QgbGk6bGFzdC1jaGlsZCBhe2JvcmRlcjpub25lOyBwYWRkaW5nLXJpZ2h0OjBweDt9XHJcbi5oZHItcmlnaHRsaXN0IGxpIGE6aG92ZXJ7Y29sb3I6IzhjYzM1N31cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwMHB4KXtcclxuICAgIC5uYXZiYXItbmF2IGxpIGF7Zm9udC1zaXplOiAxNXB4O3BhZGRpbmc6IDVweCAxNXB4IDt9XHJcbiAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7IFxyXG4gICAgLm5hdmJhci1uYXYgbGkgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA5cHggIWltcG9ydGFudCA7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7ICAgICAgIFxyXG4gICAgd2lkdGg6IDEuMWVtO1xyXG4gICAgaGVpZ2h0OiAxLjFlbTtcclxufVxyXG5cclxuLm5hdmlnYXRpb257ZmxvYXQ6bm9uZTt3aWR0aDoxMDAlO21hcmdpbi10b3A6IDBweDtwYWRkaW5nLXJpZ2h0OjBweDs7fVxyXG4uZml4ZWQtaGVhZGVyIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLm5hdi1saW5rLCAuaW5uZXItcGFnZS1oZWFkZXIgLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmsge2NvbG9yOiNmZmY7fVxyXG4ubmF2aWdhdGlvbi1wYXJ0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgICBmbGV4OiAwIDAgNzUlO1xyXG59XHJcbi5sb2dvLXBhcnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLmxvZ28tcGFydCBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiA1MHB4O1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5uYXZpZ2F0aW9ue3RleHQtYWxpZ246IHJpZ2h0O2Rpc3BsYXk6IGlubGluZS1ibG9jazsgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7fVxyXG4gICAgICAgIC5uYXZpZ2F0aW9uIC5uYXZiYXItY29sbGFwc2UgeyBcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjkpOyAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7ICByaWdodDotMTEwJTtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZTtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZTsgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5uYXZpZ2F0aW9uIC5uYXZiYXItY29sbGFwc2Uuc2hvd3tyaWdodDowcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbjtcclxuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiByaWdodCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogLmZpeGVkLWhlYWRlciAgIC5uYXZpZ2F0aW9uIC5uYXZiYXItY29sbGFwc2Uuc2hvd3tkaXNwbGF5Om5vbmU7IH0gKi9cclxufSBcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NzZweCl7XHJcbiAgICBcclxuICAgIC5oZWFkZXItcmlnaHQtcGFydCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA3MCU7ICAgIFxyXG4gICAgfVxyXG4gICAgLmhkci1yaWdodGxpc3QgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEzcHg7fVxyXG4gICAgIFxyXG4gICAgICAgIC5uYXZpZ2F0aW9uLXBhcnQge1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7ZmxleDogNjAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpe1xyXG4gIFxyXG4gICAgLmhkci1yaWdodGxpc3QgbGkgYSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDlweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItcmlnaHQtcGFydCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA2OCU7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/components/header/header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/header/header.component.ts ***!
  \**********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    hideMenu() {
        $('.navbar-collapse').removeClass('show');
    }
    ngOnInit() {
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
        // this.solution.getSolution().subscribe(res => this.data = res);
        // this.translateBtn = document.getElementById('translatebtn');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/shared/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/modules/shared/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/modules/shared/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/modules/shared/components/footer/footer.component.ts");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm2015/ngx-wow.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/admin-header/admin-header.component */ "./src/app/modules/shared/components/admin-header/admin-header.component.ts");
/* harmony import */ var _components_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/admin-footer/admin-footer.component */ "./src/app/modules/shared/components/admin-footer/admin-footer.component.ts");
/* harmony import */ var _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/admin-sidebar/admin-sidebar.component */ "./src/app/modules/shared/components/admin-sidebar/admin-sidebar.component.ts");























let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_20__["AdminHeaderComponent"], _components_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_21__["AdminFooterComponent"], _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["AdminSidebarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_wow__WEBPACK_IMPORTED_MODULE_6__["NgwWowModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], ngx_editor__WEBPACK_IMPORTED_MODULE_15__["NgxEditorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
        ],
        exports: [
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_20__["AdminHeaderComponent"], _components_admin_footer_admin_footer_component__WEBPACK_IMPORTED_MODULE_21__["AdminFooterComponent"], _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_22__["AdminSidebarComponent"], ngx_wow__WEBPACK_IMPORTED_MODULE_6__["NgwWowModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_7__["SlickCarouselModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], ngx_editor__WEBPACK_IMPORTED_MODULE_15__["NgxEditorModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/modules/website/components/about-us/about-us.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/website/components/about-us/about-us.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-us-content-section{padding-top:60px;margin-bottom:80px;}\r\n.about-content-side h2{font-weight: 700; margin-bottom: 20px;;}\r\n.why-choose-section{padding:80px 0px;background:#fbfbfb;}\r\n.why-choose-section h2{font-weight: 700;margin-bottom: 20px;;}\r\n.choose-part{border-radius: 6px;;text-align: center;padding:40px 30px 30px;background:#fff;min-height:340px;margin:20px 0px;box-shadow: 0px 1px 11px #ddd;}\r\n.choose-part h4 {\r\n    font-weight: 600;\r\n    font-size: 22px;margin-bottom: 10px;\r\n}\r\n.choose-part p {\r\n    font-size: 15px;\r\n    line-height: 24px;color:#999;\r\n}\r\n.choose-icon-part {\r\n    background: #8cc357;;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n    font-size: 50px;color: #fff;\r\n    padding: 10px;\r\n    margin: 0px auto 25px;\r\n}\r\n.about-content-side p {\r\n    color: #777;\r\n    line-height: 27px;\r\n}\r\n@media screen and (max-width:900px){\r\n    .choose-icon-part{width: 80px;\r\n        height: 80px; \r\n        font-size: 40px;}\r\n        .choose-part h4{font-size:21px;}\r\n        .choose-part{    min-height: 370px;}\r\n}\r\n@media screen and (max-width:767px){\r\n    .about-us-content-section{padding-top:30px;}\r\n    .choose-part{max-width: 500px;margin:20px auto;min-height:100px;}\r\n    .section-heading-part h2 { \r\n        font-size: 27px;\r\n    }\r\n    .why-choose-section{padding:40px 0px}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEIsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7QUFDOUQsdUJBQXVCLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFO0FBQzlELG9CQUFvQixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUN4RCx1QkFBdUIsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUU7QUFDN0QsYUFBYSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLDZCQUE2QixDQUFDO0FBQzFKO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWUsQ0FBQyxtQkFBbUI7QUFDdkM7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUIsQ0FBQyxVQUFVO0FBQ2hDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZSxDQUFDLFdBQVc7SUFDM0IsYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCLFdBQVc7UUFDekIsWUFBWTtRQUNaLGVBQWUsQ0FBQztRQUNoQixnQkFBZ0IsY0FBYyxDQUFDO1FBQy9CLGlCQUFpQixpQkFBaUIsQ0FBQztBQUMzQztBQUVBO0lBQ0ksMEJBQTBCLGdCQUFnQixDQUFDO0lBQzNDLGFBQWEsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7SUFDaEU7UUFDSSxlQUFlO0lBQ25CO0lBQ0Esb0JBQW9CLGdCQUFnQjtBQUN4QyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2Vic2l0ZS9jb21wb25lbnRzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtdXMtY29udGVudC1zZWN0aW9ue3BhZGRpbmctdG9wOjYwcHg7bWFyZ2luLWJvdHRvbTo4MHB4O31cclxuLmFib3V0LWNvbnRlbnQtc2lkZSBoMntmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiAyMHB4Ozt9XHJcbi53aHktY2hvb3NlLXNlY3Rpb257cGFkZGluZzo4MHB4IDBweDtiYWNrZ3JvdW5kOiNmYmZiZmI7fVxyXG4ud2h5LWNob29zZS1zZWN0aW9uIGgye2ZvbnQtd2VpZ2h0OiA3MDA7bWFyZ2luLWJvdHRvbTogMjBweDs7fVxyXG4uY2hvb3NlLXBhcnR7Ym9yZGVyLXJhZGl1czogNnB4Ozt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZzo0MHB4IDMwcHggMzBweDtiYWNrZ3JvdW5kOiNmZmY7bWluLWhlaWdodDozNDBweDttYXJnaW46MjBweCAwcHg7Ym94LXNoYWRvdzogMHB4IDFweCAxMXB4ICNkZGQ7fSBcclxuLmNob29zZS1wYXJ0IGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDIycHg7bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uY2hvb3NlLXBhcnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtjb2xvcjojOTk5O1xyXG59XHJcbi5jaG9vc2UtaWNvbi1wYXJ0IHtcclxuICAgIGJhY2tncm91bmQ6ICM4Y2MzNTc7O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDI1cHg7XHJcbn1cclxuLmFib3V0LWNvbnRlbnQtc2lkZSBwIHtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCl7XHJcbiAgICAuY2hvb3NlLWljb24tcGFydHt3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDt9XHJcbiAgICAgICAgLmNob29zZS1wYXJ0IGg0e2ZvbnQtc2l6ZToyMXB4O31cclxuICAgICAgICAuY2hvb3NlLXBhcnR7ICAgIG1pbi1oZWlnaHQ6IDM3MHB4O31cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuYWJvdXQtdXMtY29udGVudC1zZWN0aW9ue3BhZGRpbmctdG9wOjMwcHg7fVxyXG4gICAgLmNob29zZS1wYXJ0e21heC13aWR0aDogNTAwcHg7bWFyZ2luOjIwcHggYXV0bzttaW4taGVpZ2h0OjEwMHB4O31cclxuICAgIC5zZWN0aW9uLWhlYWRpbmctcGFydCBoMiB7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIH1cclxuICAgIC53aHktY2hvb3NlLXNlY3Rpb257cGFkZGluZzo0MHB4IDBweH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/website/components/about-us/about-us.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/website/components/about-us/about-us.component.ts ***!
  \***************************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/modules/website/components/about-us/about-us.component.css")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/modules/website/components/careers/careers.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/website/components/careers/careers.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**career page*/\r\n.inner-pages-content{padding-top:0px;}\r\n.career-section{padding:0px 0px 60px;background: #fff;}\r\n.career-content{padding:15px;border:1px solid #eee;border-left: 3px solid #7fd82a;margin:10px 0px;\r\n    border-radius: 3px;background: #fff;box-shadow:1px 2px 8px #f5f5f5;min-height:115px;}\r\n.career-content h4{font-size:15px; font-weight:500;color:#7fd82a;}\r\n.career-content p{color:#999;font-size:13px;margin-bottom: 0px;}\r\n.custom-padding{padding:0px 8px;}\r\n.custom-margin{margin:0px -8px;}\r\n.career-content p .fas {\r\n    margin-right: 7px;\r\n    font-size: 12px;\r\n}\r\n.tab-content-section {max-width: 1200px;margin:auto;\r\n    padding: 0px 0px;\r\n    /* background: #fbfbfb; */\r\n}\r\n.nav-tabs { \r\n    background: #fff;margin-bottom: 10px;;\r\n}\r\n.nav-tabs .nav-link{font-weight:500;border:none;border-bottom:2px solid transparent!important;padding:10px 27px;color:#333;}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active, .nav-tabs .nav-link:hover {\r\n    color: #7fd82a;\r\n    background-color: #fff;\r\n   border:none;border-bottom:2px solid #7fd82a!important;\r\n}\r\n@media screen and (max-width:1024px){\r\n    .nav-tabs .nav-link{padding:10px 15px;}\r\n}\r\n@media screen and (max-width:992px){\r\n    .nav-tabs .nav-link{padding:10px 10px;}\r\n}\r\n@media screen and (max-width:450px){\r\n    .nav-tabs .nav-link {\r\n        padding: 6px 11px;\r\n        font-weight: 500;\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvY2FyZWVycy9jYXJlZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLHFCQUFxQixlQUFlLENBQUM7QUFDckMsZ0JBQWdCLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDO0FBQ3RELGdCQUFnQixZQUFZLENBQUMscUJBQXFCLENBQUMsOEJBQThCLENBQUMsZUFBZTtJQUM3RixrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyw4QkFBOEIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN4RixtQkFBbUIsY0FBYyxFQUFFLGVBQWUsQ0FBQyxhQUFhLENBQUM7QUFDakUsa0JBQWtCLFVBQVUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUM7QUFDL0QsZ0JBQWdCLGVBQWUsQ0FBQztBQUNoQyxlQUFlLGVBQWUsQ0FBQztBQUMvQjtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0Esc0JBQXNCLGlCQUFpQixDQUFDLFdBQVc7SUFDL0MsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCLENBQUMsbUJBQW1CO0FBQ3hDO0FBQ0Esb0JBQW9CLGVBQWUsQ0FBQyxXQUFXLENBQUMsNkNBQTZDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0FBQzNIO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtHQUN2QixXQUFXLENBQUMseUNBQXlDO0FBQ3hEO0FBQ0E7SUFDSSxvQkFBb0IsaUJBQWlCLENBQUM7QUFDMUM7QUFDQTtJQUNJLG9CQUFvQixpQkFBaUIsQ0FBQztBQUMxQztBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2Vic2l0ZS9jb21wb25lbnRzL2NhcmVlcnMvY2FyZWVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqY2FyZWVyIHBhZ2UqL1xyXG4uaW5uZXItcGFnZXMtY29udGVudHtwYWRkaW5nLXRvcDowcHg7fVxyXG4uY2FyZWVyLXNlY3Rpb257cGFkZGluZzowcHggMHB4IDYwcHg7YmFja2dyb3VuZDogI2ZmZjt9XHJcbi5jYXJlZXItY29udGVudHtwYWRkaW5nOjE1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZWVlO2JvcmRlci1sZWZ0OiAzcHggc29saWQgIzdmZDgyYTttYXJnaW46MTBweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7YmFja2dyb3VuZDogI2ZmZjtib3gtc2hhZG93OjFweCAycHggOHB4ICNmNWY1ZjU7bWluLWhlaWdodDoxMTVweDt9XHJcbi5jYXJlZXItY29udGVudCBoNHtmb250LXNpemU6MTVweDsgZm9udC13ZWlnaHQ6NTAwO2NvbG9yOiM3ZmQ4MmE7fVxyXG4uY2FyZWVyLWNvbnRlbnQgcHtjb2xvcjojOTk5O2ZvbnQtc2l6ZToxM3B4O21hcmdpbi1ib3R0b206IDBweDt9XHJcbi5jdXN0b20tcGFkZGluZ3twYWRkaW5nOjBweCA4cHg7fVxyXG4uY3VzdG9tLW1hcmdpbnttYXJnaW46MHB4IC04cHg7fVxyXG4uY2FyZWVyLWNvbnRlbnQgcCAuZmFzIHtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi50YWItY29udGVudC1zZWN0aW9uIHttYXgtd2lkdGg6IDEyMDBweDttYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZmJmYmZiOyAqL1xyXG59XHJcbi5uYXYtdGFicyB7IFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZjttYXJnaW4tYm90dG9tOiAxMHB4OztcclxufVxyXG4ubmF2LXRhYnMgLm5hdi1saW5re2ZvbnQtd2VpZ2h0OjUwMDtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjJweCBzb2xpZCB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7cGFkZGluZzoxMHB4IDI3cHg7Y29sb3I6IzMzMzt9XHJcbi5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXRhYnMgLm5hdi1saW5rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjN2ZkODJhO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgYm9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgIzdmZDgyYSFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDI0cHgpe1xyXG4gICAgLm5hdi10YWJzIC5uYXYtbGlua3twYWRkaW5nOjEwcHggMTVweDt9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAubmF2LXRhYnMgLm5hdi1saW5re3BhZGRpbmc6MTBweCAxMHB4O31cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KXtcclxuICAgIC5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/website/components/careers/careers.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/website/components/careers/careers.component.ts ***!
  \*************************************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CareersComponent = class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
};
CareersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-careers',
        template: __webpack_require__(/*! raw-loader!./careers.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/careers/careers.component.html"),
        styles: [__webpack_require__(/*! ./careers.component.css */ "./src/app/modules/website/components/careers/careers.component.css")]
    })
], CareersComponent);



/***/ }),

/***/ "./src/app/modules/website/components/contact-us/contact-us.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/website/components/contact-us/contact-us.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-page-section{padding:30px 0px 60px} \r\n\r\n.contact-info{padding:0px;} \r\n\r\n.contact-info li{list-style: none;padding:10px 10px;display: inline-block;width:28%;} \r\n\r\n.contact-info li:first-child{padding-left: 0px;} \r\n\r\n.contact-info .addressli{width:43%;padding-right:0px;;} \r\n\r\n.continfopart {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    background: #fbfbfb;\r\n    padding: 10px 20px 0px;\r\n    min-height: 124px;\r\n} \r\n\r\n.info-content strong {\r\n    font-size: 22px;\r\n    margin-bottom: 2px; ;\r\n    display: block;\r\n} \r\n\r\n.contact-info .iconpart {\r\n    font-size: 24px;color: #8cc357;margin-top: 5px;;\r\n    margin-right: 19px;\r\n} \r\n\r\n.info-content p,.info-content p a {\r\n    font-size: 15px;color:#999;\r\n    line-height: 25px;margin-bottom: 0px;;\r\n    font-weight: 500;\r\n} \r\n\r\n.contact-page-section .form-group label{font-weight: 600;    font-size: 15px;\r\n    margin-bottom: 4px;} \r\n\r\n.submitbtn,.submitbtn:hover,.submitbtn:focus{background: #8cc357;border-color: #8cc357;font-weight: 500;} \r\n\r\n@media screen and (max-width:1100px){\r\n   \r\n    .info-content strong {\r\n        font-size: 21px;\r\n    }\r\n} \r\n\r\n@media screen and (max-width:992px){\r\n    \r\n    .contact-info li {\r\n        width: 49.7%;\r\n    }\r\n    .contact-info li:nth-child(2){padding-right: 0px;}\r\n    .continfopart{padding-bottom:10px;min-height: 40px;;}\r\n    .contact-info .addressli {\r\n        width: 100%; padding-left:0px;\r\n    }\r\n    .info-content p, .info-content p a{line-height: 20px;;}\r\n    .info-content strong {\r\n        font-size: 17px;}\r\n} \r\n\r\n@media screen and (max-width:768px){\r\n     \r\n    .partner-part { \r\n        padding: 22px 12px 36px; \r\n        min-height: 309px;\r\n    }\r\n    .partner-content-part h3 { \r\n        font-size: 16px;\r\n    }\r\n    .partnericon-part{margin-right: 10px;;}\r\n    .partnericon-part .fa {\r\n        font-size: 26px;}\r\n} \r\n\r\n@media screen and (max-width:767px){\r\n    .continfopart{min-height: 50px;padding-bottom: 10px;}\r\n    .contact-page-section {\r\n        padding: 0px 0px 60px;\r\n    }\r\n    .contact-info li{padding:10px 0px;}\r\n    .info-content p, .info-content p a {\r\n        line-height: 24px;\r\n    }\r\n    .contact-info li,.contact-info .addressli {\r\n        width: 100%;\r\n    } \r\n    \r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCLHFCQUFxQjs7QUFFM0MsY0FBYyxXQUFXLENBQUM7O0FBRTFCLGlCQUFpQixnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7O0FBQ3BGLDZCQUE2QixpQkFBaUIsQ0FBQzs7QUFDL0MseUJBQXlCLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTs7QUFDdEQ7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWUsQ0FBQyxjQUFjLENBQUMsZUFBZTtJQUM5QyxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlLENBQUMsVUFBVTtJQUMxQixpQkFBaUIsQ0FBQyxrQkFBa0I7SUFDcEMsZ0JBQWdCO0FBQ3BCOztBQUNBLHdDQUF3QyxnQkFBZ0IsS0FBSyxlQUFlO0lBQ3hFLGtCQUFrQixDQUFDOztBQUN2Qiw2Q0FBNkMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7O0FBRXhHOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUNBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjtJQUNBLDhCQUE4QixrQkFBa0IsQ0FBQztJQUNqRCxjQUFjLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFO0lBQ3BEO1FBQ0ksV0FBVyxFQUFFLGdCQUFnQjtJQUNqQztJQUNBLG1DQUFtQyxpQkFBaUIsRUFBRTtJQUN0RDtRQUNJLGVBQWUsQ0FBQztBQUN4Qjs7QUFFQTs7SUFFSTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQSxrQkFBa0Isa0JBQWtCLEVBQUU7SUFDdEM7UUFDSSxlQUFlLENBQUM7QUFDeEI7O0FBRUE7SUFDSSxjQUFjLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDO0lBQ3BEO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0EsaUJBQWlCLGdCQUFnQixDQUFDO0lBQ2xDO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7O0lBRUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dlYnNpdGUvY29tcG9uZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXBhZ2Utc2VjdGlvbntwYWRkaW5nOjMwcHggMHB4IDYwcHh9IFxyXG5cclxuLmNvbnRhY3QtaW5mb3twYWRkaW5nOjBweDt9XHJcbiBcclxuLmNvbnRhY3QtaW5mbyBsaXtsaXN0LXN0eWxlOiBub25lO3BhZGRpbmc6MTBweCAxMHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDoyOCU7fVxyXG4uY29udGFjdC1pbmZvIGxpOmZpcnN0LWNoaWxke3BhZGRpbmctbGVmdDogMHB4O31cclxuLmNvbnRhY3QtaW5mbyAuYWRkcmVzc2xpe3dpZHRoOjQzJTtwYWRkaW5nLXJpZ2h0OjBweDs7fVxyXG4uY29udGluZm9wYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEyNHB4O1xyXG59XHJcbi5pbmZvLWNvbnRlbnQgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDsgO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyAuaWNvbnBhcnQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O2NvbG9yOiAjOGNjMzU3O21hcmdpbi10b3A6IDVweDs7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE5cHg7XHJcbn1cclxuLmluZm8tY29udGVudCBwLC5pbmZvLWNvbnRlbnQgcCBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtjb2xvcjojOTk5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7bWFyZ2luLWJvdHRvbTogMHB4OztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNvbnRhY3QtcGFnZS1zZWN0aW9uIC5mb3JtLWdyb3VwIGxhYmVse2ZvbnQtd2VpZ2h0OiA2MDA7ICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDt9XHJcbi5zdWJtaXRidG4sLnN1Ym1pdGJ0bjpob3Zlciwuc3VibWl0YnRuOmZvY3Vze2JhY2tncm91bmQ6ICM4Y2MzNTc7Ym9yZGVyLWNvbG9yOiAjOGNjMzU3O2ZvbnQtd2VpZ2h0OiA1MDA7fVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTAwcHgpe1xyXG4gICBcclxuICAgIC5pbmZvLWNvbnRlbnQgc3Ryb25nIHtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICBcclxuICAgIC5jb250YWN0LWluZm8gbGkge1xyXG4gICAgICAgIHdpZHRoOiA0OS43JTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWluZm8gbGk6bnRoLWNoaWxkKDIpe3BhZGRpbmctcmlnaHQ6IDBweDt9XHJcbiAgICAuY29udGluZm9wYXJ0e3BhZGRpbmctYm90dG9tOjEwcHg7bWluLWhlaWdodDogNDBweDs7fVxyXG4gICAgLmNvbnRhY3QtaW5mbyAuYWRkcmVzc2xpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgcGFkZGluZy1sZWZ0OjBweDtcclxuICAgIH1cclxuICAgIC5pbmZvLWNvbnRlbnQgcCwgLmluZm8tY29udGVudCBwIGF7bGluZS1oZWlnaHQ6IDIwcHg7O31cclxuICAgIC5pbmZvLWNvbnRlbnQgc3Ryb25nIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgICBcclxuICAgIC5wYXJ0bmVyLXBhcnQgeyBcclxuICAgICAgICBwYWRkaW5nOiAyMnB4IDEycHggMzZweDsgXHJcbiAgICAgICAgbWluLWhlaWdodDogMzA5cHg7XHJcbiAgICB9XHJcbiAgICAucGFydG5lci1jb250ZW50LXBhcnQgaDMgeyBcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucGFydG5lcmljb24tcGFydHttYXJnaW4tcmlnaHQ6IDEwcHg7O31cclxuICAgIC5wYXJ0bmVyaWNvbi1wYXJ0IC5mYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O31cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAuY29udGluZm9wYXJ0e21pbi1oZWlnaHQ6IDUwcHg7cGFkZGluZy1ib3R0b206IDEwcHg7fVxyXG4gICAgLmNvbnRhY3QtcGFnZS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1pbmZvIGxpe3BhZGRpbmc6MTBweCAwcHg7fVxyXG4gICAgLmluZm8tY29udGVudCBwLCAuaW5mby1jb250ZW50IHAgYSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1pbmZvIGxpLC5jb250YWN0LWluZm8gLmFkZHJlc3NsaSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/website/components/contact-us/contact-us.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/website/components/contact-us/contact-us.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactUsComponent = class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/contact-us/contact-us.component.html"),
        styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/modules/website/components/contact-us/contact-us.component.css")]
    })
], ContactUsComponent);



/***/ }),

/***/ "./src/app/modules/website/components/dammam/dammam.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/website/components/dammam/dammam.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".damman-section{padding:40px 0px;}\r\n.dist-list{padding:0px; display:-webkit-box; display:flex;    flex-wrap: wrap;background:#fbfbfb;padding:20px}\r\n.dist-list li{list-style: none;padding:10px;width:25%;}\r\n.dist-list li a{border:1px solid #eee; -webkit-transition:0.5s; transition:0.5s;   box-shadow: 0px 1px 5px #ddd; border-radius:4px; padding:15px;display: block;color:#333;background:#fff;}\r\n.dist-list li a:hover{-webkit-transform: scale(1.04);transform: scale(1.04);}\r\n.dist-list li a .fas{float:right;margin-top:3px;;}\r\n/**policy page*/\r\n.policy-section{padding:40px 0px 60px;}\r\n.policy-content h3{font-weight: 600;margin-bottom: 20px;font-size:25px;margin-top:20px;;}\r\n.policy-content h4{font-weight: 600;margin-bottom:15px;font-size:18px;;}\r\n.policy-content p{line-height: 30px; color:#777;}\r\n@media screen and (max-width:992px){\r\n    .dist-list li{width:33%;}\r\n}\r\n@media screen and (max-width:767px){\r\n    .dist-list li{width:50%;}\r\n}\r\n@media screen and (max-width:450px){\r\n    .dist-list li{width:100%;}\r\n    .section-heading-part h2 {\r\n        font-weight: 700;\r\n        font-size: 21px;\r\n    }\r\n    .damman-section{padding:10px 10px 0px;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvZGFtbWFtL2RhbW1hbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixnQkFBZ0IsQ0FBQztBQUNqQyxXQUFXLFdBQVcsRUFBRSxtQkFBWSxFQUFaLFlBQVksS0FBSyxlQUFlLENBQUMsa0JBQWtCLENBQUMsWUFBWTtBQUN4RixjQUFjLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7QUFDdEQsZ0JBQWdCLHFCQUFxQixFQUFFLHVCQUFlLEVBQWYsZUFBZSxJQUFJLDRCQUE0QixFQUFFLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztBQUNsSyxzQkFBc0IsOEJBQXNCLENBQXRCLHNCQUFzQixDQUFDO0FBQzdDLHFCQUFxQixXQUFXLENBQUMsY0FBYyxFQUFFO0FBQ2pELGVBQWU7QUFDZixnQkFBZ0IscUJBQXFCLENBQUM7QUFDdEMsbUJBQW1CLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUU7QUFDeEYsbUJBQW1CLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLGNBQWMsRUFBRTtBQUN2RSxrQkFBa0IsaUJBQWlCLEVBQUUsVUFBVSxDQUFDO0FBQ2hEO0lBQ0ksY0FBYyxTQUFTLENBQUM7QUFDNUI7QUFDQTtJQUNJLGNBQWMsU0FBUyxDQUFDO0FBQzVCO0FBQ0E7SUFDSSxjQUFjLFVBQVUsQ0FBQztJQUN6QjtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0lBQ0EsZ0JBQWdCLHFCQUFxQixDQUFDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvZGFtbWFtL2RhbW1hbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhbW1hbi1zZWN0aW9ue3BhZGRpbmc6NDBweCAwcHg7fVxyXG4uZGlzdC1saXN0e3BhZGRpbmc6MHB4OyBkaXNwbGF5OmZsZXg7ICAgIGZsZXgtd3JhcDogd3JhcDtiYWNrZ3JvdW5kOiNmYmZiZmI7cGFkZGluZzoyMHB4fVxyXG4uZGlzdC1saXN0IGxpe2xpc3Qtc3R5bGU6IG5vbmU7cGFkZGluZzoxMHB4O3dpZHRoOjI1JTt9XHJcbi5kaXN0LWxpc3QgbGkgYXtib3JkZXI6MXB4IHNvbGlkICNlZWU7IHRyYW5zaXRpb246MC41czsgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAjZGRkOyBib3JkZXItcmFkaXVzOjRweDsgcGFkZGluZzoxNXB4O2Rpc3BsYXk6IGJsb2NrO2NvbG9yOiMzMzM7YmFja2dyb3VuZDojZmZmO31cclxuLmRpc3QtbGlzdCBsaSBhOmhvdmVye3RyYW5zZm9ybTogc2NhbGUoMS4wNCk7fVxyXG4uZGlzdC1saXN0IGxpIGEgLmZhc3tmbG9hdDpyaWdodDttYXJnaW4tdG9wOjNweDs7fVxyXG4vKipwb2xpY3kgcGFnZSovXHJcbi5wb2xpY3ktc2VjdGlvbntwYWRkaW5nOjQwcHggMHB4IDYwcHg7fVxyXG4ucG9saWN5LWNvbnRlbnQgaDN7Zm9udC13ZWlnaHQ6IDYwMDttYXJnaW4tYm90dG9tOiAyMHB4O2ZvbnQtc2l6ZToyNXB4O21hcmdpbi10b3A6MjBweDs7fVxyXG4ucG9saWN5LWNvbnRlbnQgaDR7Zm9udC13ZWlnaHQ6IDYwMDttYXJnaW4tYm90dG9tOjE1cHg7Zm9udC1zaXplOjE4cHg7O31cclxuLnBvbGljeS1jb250ZW50IHB7bGluZS1oZWlnaHQ6IDMwcHg7IGNvbG9yOiM3Nzc7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgIC5kaXN0LWxpc3QgbGl7d2lkdGg6MzMlO31cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5kaXN0LWxpc3QgbGl7d2lkdGg6NTAlO31cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KXtcclxuICAgIC5kaXN0LWxpc3QgbGl7d2lkdGg6MTAwJTt9XHJcbiAgICAuc2VjdGlvbi1oZWFkaW5nLXBhcnQgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgfVxyXG4gICAgLmRhbW1hbi1zZWN0aW9ue3BhZGRpbmc6MTBweCAxMHB4IDBweDt9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/website/components/dammam/dammam.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/website/components/dammam/dammam.component.ts ***!
  \***********************************************************************/
/*! exports provided: DammamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DammamComponent", function() { return DammamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DammamComponent = class DammamComponent {
    constructor() { }
    ngOnInit() {
    }
};
DammamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dammam',
        template: __webpack_require__(/*! raw-loader!./dammam.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/dammam/dammam.component.html"),
        styles: [__webpack_require__(/*! ./dammam.component.css */ "./src/app/modules/website/components/dammam/dammam.component.css")]
    })
], DammamComponent);



/***/ }),

/***/ "./src/app/modules/website/components/faqs/faqs.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/website/components/faqs/faqs.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*faq**/\r\n.faq-section{padding:0px 0px 60px;}\r\n.faqtabs {\r\n    /* background: #fbfbfb; */\r\n     /* border:1px solid #ddd; */ \r\n     margin-bottom:20px;\r\n}\r\n.faqtabs li a.nav-link {\r\n    padding: 15px 20px;border:none;\r\n    border-bottom: 1px solid #ddd;\r\n    color: #000;\r\n    /* font-weight: 600; */\r\n}\r\n.faqtabs li a.nav-link.active,.faqtabs li a.nav-link:hover{ border:none;color:#75ad3f;position:relative}\r\n.faqtabs li a.nav-link.active::after{    content: \"\";\r\n    \r\n    position: absolute; \r\n    height: 3px;\r\n    /* border-right: 1px solid #75ad3f;\r\n    border-top: 1px solid #75ad3f;\r\n    transform: rotate(45deg);\r\n    padding: 3px; */\r\n    bottom:-3px;width:100%;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;left:0;\r\n    background: #75ad3f;}\r\n.panel-title>a, .panel-title>a:active{\r\n\tdisplay:block;\r\n\tpadding:20px 15px;\r\n  color:#555;background:#fff;\r\n  font-size:16px;\r\n  /* font-weight:600;  */\r\n  word-spacing:3px;\r\n\ttext-decoration:none;\r\n}\r\n.panel-title>a.collcollapsed{background:#fff}\r\n.panel-heading  a.collapsed:before {\r\n   content: \"\";right:50px; position: absolute;width:10px; height:10px;  border-right: 0.2em solid black;\r\n   border-top: 0.2em solid black;;-webkit-transform:rotate(136deg);;transform:rotate(136deg);\r\n   padding:3px;\r\n   -webkit-transition: all 0.5s;\r\n   transition: all 0.5s;\r\n}\r\n.panel-heading a:before {\r\n    content: \"\";right:50px; position: absolute;width:10px; height:10px;  border-right: 0.2em solid black;\r\n    border-top: 0.2em solid black;;-webkit-transform:rotate(-45deg);;transform:rotate(-45deg);\r\n    padding:3px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n}\r\n.panel-default{border:1px solid #ddd;margin-bottom:2px;}\r\n.panel-title{margin-bottom:0px;}\r\n.panel-heading{background:#fbfbfb}\r\n.tab-content h3{font-size:23px; font-weight: 600;margin-bottom:20px;}\r\n.panel-body{padding:15px;font-size:16px;    line-height: 30px;\r\n    color: #888;}\r\n@media screen and (max-width:767px){\r\n    .faq-section{padding-top:0px;}\r\n}\r\n@media screen and (max-width:576px){\r\n        .faqtabs {\r\n               display: -webkit-box;\r\n               display: flex;\r\n            -webkit-box-orient: horizontal !important;\r\n            -webkit-box-direction: normal !important;\r\n                    flex-direction: row !important;min-height:10px;margin-bottom:30px;\r\n        }\r\n        .faqtabs li a.nav-link {\r\n            padding: 15px 13px;}\r\n            \r\n                .panel-title>a, .panel-title>a:active { \r\n                    padding: 16px 29px 16px 10px; \r\n                    font-size: 15px; \r\n                    word-spacing:0px;\r\n                    text-decoration: none;\r\n                }\r\n                .panel-heading a:before , .panel-heading a.collapsed:before{\r\n                    content: \"\";\r\n                    right:24px;\r\n                     width: 10px;\r\n                    height: 10px;\r\n                   \r\n                }\r\n    }\r\n@media screen and (max-width:320px){\r\n        .faqtabs li a.nav-link {\r\n            padding: 15px 9px;\r\n            display: block;\r\n            font-size: 14px;\r\n        }\r\n    }\r\n/*faq end**/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvZmFxcy9mYXFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTztBQUNQLGFBQWEsb0JBQW9CLENBQUM7QUFHbEM7SUFDSSx5QkFBeUI7S0FDeEIsMkJBQTJCO0tBQzNCLGtCQUFrQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCLENBQUMsV0FBVztJQUM5Qiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUNBLDREQUE0RCxXQUFXLENBQUMsYUFBYSxDQUFDLGlCQUFpQjtBQUN2Ryx5Q0FBeUMsV0FBVzs7SUFFaEQsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWDs7O21CQUdlO0lBQ2YsV0FBVyxDQUFDLFVBQVU7SUFDdEIsNEJBQW9CO0lBQXBCLG9CQUFvQixDQUFDLE1BQU07SUFDM0IsbUJBQW1CLENBQUM7QUFDeEI7Q0FDQyxhQUFhO0NBQ2IsaUJBQWlCO0VBQ2hCLFVBQVUsQ0FBQyxlQUFlO0VBQzFCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0NBQ2pCLG9CQUFvQjtBQUNyQjtBQUNBLDZCQUE2QixlQUFlO0FBQzVDO0dBQ0csV0FBVyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxHQUFHLCtCQUErQjtHQUNwRyw2QkFBNkIsRUFBRSxnQ0FBd0IsRUFBeEIsd0JBQXdCO0dBQ3ZELFdBQVc7R0FDWCw0QkFBb0I7R0FBcEIsb0JBQW9CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXLENBQUMsVUFBVSxFQUFFLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxXQUFXLEdBQUcsK0JBQStCO0lBQ3BHLDZCQUE2QixFQUFFLGdDQUF3QixFQUF4Qix3QkFBd0I7SUFDdkQsV0FBVztJQUNYLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7QUFDQSxlQUFlLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDO0FBQ3ZELGFBQWEsaUJBQWlCLENBQUM7QUFDL0IsZUFBZSxrQkFBa0I7QUFDakMsZ0JBQWdCLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztBQUNwRSxZQUFZLFlBQVksQ0FBQyxjQUFjLEtBQUssaUJBQWlCO0lBQ3pELFdBQVcsQ0FBQztBQUNoQjtJQUNJLGFBQWEsZUFBZSxDQUFDO0FBQ2pDO0FBQ0k7UUFDSTtlQUNPLG9CQUFhO2VBQWIsYUFBYTtZQUNoQix5Q0FBOEI7WUFBOUIsd0NBQThCO29CQUE5Qiw4QkFBOEIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO1FBQ3JFO1FBQ0E7WUFDSSxrQkFBa0IsQ0FBQzs7Z0JBRWY7b0JBQ0ksNEJBQTRCO29CQUM1QixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIscUJBQXFCO2dCQUN6QjtnQkFDQTtvQkFDSSxXQUFXO29CQUNYLFVBQVU7cUJBQ1QsV0FBVztvQkFDWixZQUFZOztnQkFFaEI7SUFDWjtBQUNBO1FBQ0k7WUFDSSxpQkFBaUI7WUFDakIsY0FBYztZQUNkLGVBQWU7UUFDbkI7SUFDSjtBQUNKLFdBQVciLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dlYnNpdGUvY29tcG9uZW50cy9mYXFzL2ZhcXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZmFxKiovXHJcbi5mYXEtc2VjdGlvbntwYWRkaW5nOjBweCAwcHggNjBweDt9XHJcblxyXG5cclxuLmZhcXRhYnMge1xyXG4gICAgLyogYmFja2dyb3VuZDogI2ZiZmJmYjsgKi9cclxuICAgICAvKiBib3JkZXI6MXB4IHNvbGlkICNkZGQ7ICovIFxyXG4gICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG4uZmFxdGFicyBsaSBhLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICAvKiBmb250LXdlaWdodDogNjAwOyAqL1xyXG59XHJcbi5mYXF0YWJzIGxpIGEubmF2LWxpbmsuYWN0aXZlLC5mYXF0YWJzIGxpIGEubmF2LWxpbms6aG92ZXJ7IGJvcmRlcjpub25lO2NvbG9yOiM3NWFkM2Y7cG9zaXRpb246cmVsYXRpdmV9XHJcbi5mYXF0YWJzIGxpIGEubmF2LWxpbmsuYWN0aXZlOjphZnRlcnsgICAgY29udGVudDogXCJcIjtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgLyogYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzc1YWQzZjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzVhZDNmO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgcGFkZGluZzogM3B4OyAqL1xyXG4gICAgYm90dG9tOi0zcHg7d2lkdGg6MTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO2xlZnQ6MDtcclxuICAgIGJhY2tncm91bmQ6ICM3NWFkM2Y7fVxyXG4ucGFuZWwtdGl0bGU+YSwgLnBhbmVsLXRpdGxlPmE6YWN0aXZle1xyXG5cdGRpc3BsYXk6YmxvY2s7XHJcblx0cGFkZGluZzoyMHB4IDE1cHg7XHJcbiAgY29sb3I6IzU1NTtiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgLyogZm9udC13ZWlnaHQ6NjAwOyAgKi9cclxuICB3b3JkLXNwYWNpbmc6M3B4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5wYW5lbC10aXRsZT5hLmNvbGxjb2xsYXBzZWR7YmFja2dyb3VuZDojZmZmfVxyXG4ucGFuZWwtaGVhZGluZyAgYS5jb2xsYXBzZWQ6YmVmb3JlIHtcclxuICAgY29udGVudDogXCJcIjtyaWdodDo1MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6MTBweDsgaGVpZ2h0OjEwcHg7ICBib3JkZXItcmlnaHQ6IDAuMmVtIHNvbGlkIGJsYWNrO1xyXG4gICBib3JkZXItdG9wOiAwLjJlbSBzb2xpZCBibGFjazs7dHJhbnNmb3JtOnJvdGF0ZSgxMzZkZWcpO1xyXG4gICBwYWRkaW5nOjNweDtcclxuICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcgYTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtyaWdodDo1MHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7d2lkdGg6MTBweDsgaGVpZ2h0OjEwcHg7ICBib3JkZXItcmlnaHQ6IDAuMmVtIHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXRvcDogMC4yZW0gc29saWQgYmxhY2s7O3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtcclxuICAgIHBhZGRpbmc6M3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn0gXHJcbi5wYW5lbC1kZWZhdWx0e2JvcmRlcjoxcHggc29saWQgI2RkZDttYXJnaW4tYm90dG9tOjJweDt9XHJcbi5wYW5lbC10aXRsZXttYXJnaW4tYm90dG9tOjBweDt9XHJcbi5wYW5lbC1oZWFkaW5ne2JhY2tncm91bmQ6I2ZiZmJmYn1cclxuLnRhYi1jb250ZW50IGgze2ZvbnQtc2l6ZToyM3B4OyBmb250LXdlaWdodDogNjAwO21hcmdpbi1ib3R0b206MjBweDt9XHJcbi5wYW5lbC1ib2R5e3BhZGRpbmc6MTVweDtmb250LXNpemU6MTZweDsgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBjb2xvcjogIzg4ODt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmZhcS1zZWN0aW9ue3BhZGRpbmctdG9wOjBweDt9XHJcbn1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc2cHgpe1xyXG4gICAgICAgIC5mYXF0YWJzIHtcclxuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O21pbi1oZWlnaHQ6MTBweDttYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mYXF0YWJzIGxpIGEubmF2LWxpbmsge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEzcHg7fVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5wYW5lbC10aXRsZT5hLCAucGFuZWwtdGl0bGU+YTphY3RpdmUgeyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDI5cHggMTZweCAxMHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7IFxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmQtc3BhY2luZzowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnBhbmVsLWhlYWRpbmcgYTpiZWZvcmUgLCAucGFuZWwtaGVhZGluZyBhLmNvbGxhcHNlZDpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDoyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpe1xyXG4gICAgICAgIC5mYXF0YWJzIGxpIGEubmF2LWxpbmsge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDlweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8qZmFxIGVuZCoqLyJdfQ== */"

/***/ }),

/***/ "./src/app/modules/website/components/faqs/faqs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/website/components/faqs/faqs.component.ts ***!
  \*******************************************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FaqsComponent = class FaqsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faqs',
        template: __webpack_require__(/*! raw-loader!./faqs.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/faqs/faqs.component.html"),
        styles: [__webpack_require__(/*! ./faqs.component.css */ "./src/app/modules/website/components/faqs/faqs.component.css")]
    })
], FaqsComponent);



/***/ }),

/***/ "./src/app/modules/website/components/home/home.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/website/components/home/home.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner-section{position: relative;background:-webkit-gradient(linear, left bottom, left top, from(#f9f9f9), to(#f9f9f9));background:linear-gradient(to top, #f9f9f9, #f9f9f9);}\r\n.banner-img{opacity:0.5;max-height: 620px;-o-object-fit: cover;object-fit: cover;\r\n    width: 100%;}\r\n.banner-absolute-part{position: absolute;top:110px; max-width:1200px;width:100%; padding:15px; \r\nleft:0;right:0; margin:auto;}\r\n.banner-absolute-part h2{ font-weight: 700;font-size: 64px;margin-bottom:10px; ;}\r\n.banner-absolute-part h4{ font-size:20px;margin-bottom:30px; }\r\n.banersearch{background:#fff;padding:7px; border-radius: 50px;border:1px solid #eee;}\r\n.banersearch .form-control{height:50px;border:none; border-radius: 50px;}\r\n.input-group-append{margin-left: 0px;;}\r\n.banersearch{max-width: 500px;}\r\n.banersearch .input-group-text{background: #8cc357;color:#fff;border-color: #8cc357;padding:4px 15px;border-radius: 50px;;}\r\n.ordernowbaner-btn{  \r\n    color: #fff;-webkit-transition: .5s;transition: .5s;\r\n    border:2px solid #8cc357;\r\n    box-shadow: none;\r\n    cursor: pointer;font-weight: 600; \r\n    line-height: 1;font-size: 18px;;\r\n    border-radius: 7px; width:200px;display: inline-block;margin-top: 40px;;\r\n    padding: 15px 34px;}\r\n.ordernowbaner-btn:hover{color:#000;text-decoration: none;background: #fff;}\r\n.app-linkpart a{ display: inline-block;\r\n        max-width: 180px;;\r\n           border: 1px solid #8cc3573b;\r\n           border-radius:6px;padding:10px 15px;\r\n           text-align: center;color:#000;background:#8cc3573b;font-weight:600;\r\n           margin-right: 20px;}\r\n.app-linkpart a .fab{margin-right:10px;font-size:21px;}\r\n.app-linkpart .google-playlink {\r\n          background:#000;color:#fff;\r\n       }\r\n.appstore-link{background-color:#fff;;}\r\n.mobile-app-section{ padding:0px 0px 0px; position: relative;}\r\n.mobile-app-content-part {\r\n        padding-top:150px;\r\n    }\r\n.mobile-app-content-part h2 {\r\n        font-weight: 800;\r\n    }\r\n.mobile-app-content-part p {\r\n        font-size: 15px;\r\n        max-width: 380px;\r\n        line-height: 30px;\r\n        margin-bottom: 50px;\r\n    }\r\n.partner-section{padding:90px 0px;background:#fbfbfb}\r\n.partner-content-part a .fa {\r\n        vertical-align: middle;\r\n    }\r\n.partner-part {\r\n        /* display: flex; */margin:15px auto;border-radius:6px;\r\n        padding: 32px 32px 46px;max-width: 530px;;\r\n        background: #fff;min-height: 279px;box-shadow: 0 3px 15px rgba(0,0,0,0.1);\r\n    }\r\n.partner-content-part {\r\n        /* text-align: center; */\r\n        margin-top: 10px;\r\n    }\r\n.partnericon-part {\r\n        /* background-image: linear-gradient(to top, rgba(247, 247, 247, 0), rgb(236, 236, 236)); */\r\n        /* text-align: center; */\r\n        padding: 10px;\r\n        border-radius: 7px 7px 0px;\r\n        margin-right: 30px;\r\n    }\r\n.partnericon-part .fa {\r\n        font-size: 38px;\r\n         /* background: #8cc357; */\r\n        color: #8cc357;\r\n        /* padding: 10px; */\r\n        border-radius: 6px;\r\n    }\r\n.partner-content-part h3 {\r\n        font-weight: 700;\r\n        font-size: 21px;\r\n    }\r\n.partner-content-part h3 .fa {\r\n        background: #8cc357;\r\n        padding: 20px;color:#fff;\r\n        border-radius: 50%;\r\n        font-size: 40px;vertical-align: middle;\r\n    }\r\n.partner-content-part h3  .partner-txt{ background: #8cc357;padding:10px 20px;color:#fff;margin-left: -10px;\r\n        font-weight: 500;\r\n    width: 81%;\r\n    display: inline-block;\r\n    }\r\n.partner-content-part p {\r\n        font-size: 15px; \r\n        line-height: 26px;\r\n        margin-bottom: 30px;\r\n        margin-top: 10px;min-height: 80px;;\r\n    }\r\n.partner-content-part a {\r\n        background: #8cc3573b;\r\n        color: #000;\r\n        padding:13px 15px;\r\n        border-radius: 6px;font-weight: 500;\r\n    }\r\n.various-cuises-section {\r\n        padding:40px 0px 40px;\r\n        background: #fbfbfb;\r\n    }\r\n.various-cuises-section h2{font-weight: 800;margin-bottom: 20px;  }\r\n/* .various-cuisines-slider{position: relative;} */\r\n.various-slider-itempart{  background:#fff;cursor: pointer;-webkit-transition: .5s;transition: .5s;;\r\n        text-align: center;margin:15px 10px; border-radius: 40px;padding:12px 10px; border:1px solid #ddd; box-shadow:0px 3px 13px #ddd }\r\n.various-slider-itempart h5{font-size:15px; color:#333;  padding-left:10px;margin-top:15px; }\r\n.various-slider-itempart:hover{box-shadow: 2px 3px 8px #ccc;-webkit-transform:scale(1.05);transform:scale(1.05)}\r\n.slick-slide img {  width:50px;height:50px; border-radius: 50%;;float:left;-o-object-fit: cover;object-fit: cover;vertical-align: middle;\r\n}\r\n.slick-dots li button::before {\r\n    font-size: 45px;\r\n}\r\n.slick-prev, .slick-next{display:none !important;  font-family: \"Font Awesome 5 Free\";z-index:99;background:#fff;border-radius: 40px;;}\r\n.slick-dots{bottom:-35px;}\r\n.slick-arrow {\r\n    top: 41%;display:none !important;\r\n    right: 17px;\r\n}\r\n.slick-next{right:-20px;}\r\n.slick-prev {\r\n    right: auto;\r\n    left: -20px;;\r\n}\r\n.slick-prev:before {\r\n    content:\"\\f359\";\r\n    color: #000;font-family: \"Font Awesome 5 Free\";\r\n    font-size: 25px;display: none;\r\n  }\r\n.slick-next:before {\r\n    content: \"\\f35a\";\r\n    color: #000;font-family: \"Font Awesome 5 Free\";\r\n    font-size: 25px;display: none;\r\n  }\r\n.download-app-section{background:#8cc357;padding:15px 0px;}\r\n.download-contentpart h2 {\r\n        font-weight: 700; color:#fff;\r\n    }\r\n.download-contentpart p {\r\n        font-size: 17px;\r\n        margin: 10px 0px 0px;    color: #fff;\r\n    }\r\n.download-image-part .app-linkpart {\r\n        margin-top: 18px;\r\n    }\r\n.download-app-section  .app-linkpart a{padding: 0px 10px;}\r\n@media screen and (max-width:1100px){\r\n        \r\n        .partner-part{    padding: 32px 22px 46px;min-height:339px;;\r\n        } \r\n        .partnericon-part{margin-right: 10px;;}\r\n        .info-content strong {\r\n            font-size: 21px;\r\n        }\r\n        .mobile-app-content-part{padding-top:90px}\r\n    }\r\n@media screen and (max-width:992px){\r\n        .app-linkpart a{  margin-right:10px;}\r\n        .mobile-app-section{padding-top:0px;;}\r\n        .mobile-app-content-part p{margin-bottom: 20px;;}\r\n        .container {\r\n            max-width: 100%;\r\n        }\r\n        .app-linkpart a img{max-width: 98%;}\r\n        .mobile-app-content-part{top:30px;    padding-top: 10px;}\r\n        .banner-absolute-part{top:60px;}\r\n        .banner-absolute-part h2{font-size: 30px;}\r\n        .partner-content-part h3 .partner-txt{    width: 75%; \r\n            vertical-align: middle;    font-size: 16px;\r\n            margin-left: -13px;}\r\n        .partner-part { \r\n            min-height: 359px;\r\n        }\r\n        .slick-slide img{width:40px; height:40px;}\r\n        .banner-absolute-part h4{font-size:17px;}\r\n        .ordernowbaner-btn{padding: 10px 24px;}\r\n        .various-slider-itempart h5{font-size:16px;    white-space: nowrap;\r\n            text-overflow: ellipsis;\r\n            overflow: hidden;}\r\n    }\r\n@media screen and (max-width:768px){ \r\n        .various-slider-itempart h5{font-size: 17px;}\r\n        .various-cuises-section{padding:20px 0px} \r\n        .partner-part { \r\n            padding: 22px 12px 36px; \r\n            min-height: 349px;\r\n        }\r\n        .partner-content-part h3 { \r\n            font-size: 16px;\r\n        }\r\n        .partnericon-part{margin-right: 10px;;}\r\n        .partnericon-part .fa {\r\n            font-size: 26px;}\r\n    }\r\n@media screen and (max-width:767px){\r\n        .mobile-app-content-part{padding-top:10px}\r\n        .banner-absolute-part h5{font-size:17px;}\r\n        .partner-content-part h3 .partner-txt{    width: 75%; \r\n            vertical-align: middle;\r\n            margin-left: -13px;}\r\n    .continfopart{min-height: 50px;padding-bottom: 10px;}\r\n    .contact-page-section {\r\n        padding: 0px 0px 60px;\r\n    }\r\n    .section-heading-part h2 {\r\n        font-weight: 700;\r\n        font-size: 30px;\r\n    }\r\n    .section-heading-part p {\r\n        font-size: 17px;\r\n    } \r\n    .app-linkpart a{    padding: 10px 9px;}\r\n    .info-content p, .info-content p a {\r\n        line-height: 24px;\r\n    } \r\n     \r\n         \r\n            .banner-absolute-part h2 {\r\n                font-size: 27px;\r\n            }\r\n            .banner-absolute-part {\r\n                top: 60px;\r\n            }\r\n            .ordernowbaner-btn {\r\n                padding: 9px 24px;\r\n                margin-top: 20px;\r\n            }\r\n            .banersearch .form-control {\r\n                height: 41px;\r\n            }  \r\n            .various-slider-itempart h5{font-size:14px;    white-space: nowrap;\r\n                text-overflow: ellipsis;\r\n                overflow: hidden;}\r\n            .mobile-app-section{padding-top:50px;}\r\n            .mobile-app-content-part p{font-size:15px;margin-bottom: 11px;line-height: 22px;;}\r\n            .mobile-app-content-part h2{font-size:28px;}\r\n            .partnericon-part .fa {\r\n                font-size: 26px; \r\n                padding: 7px; \r\n            }\r\n            .partnericon-part {\r\n                margin-right: 10px;\r\n            }\r\n            .partner-content-part a{font-size: 14px;;}\r\n            .download-contentpart h2 { \r\n                font-size: 27px;\r\n            }\r\n            .download-contentpart p {\r\n                font-size: 15px;}\r\n                .download-image-part .app-linkpart { \r\n                    text-align: right;\r\n                }\r\n                .partner-section {\r\n                    padding: 60px 0px 30px;\r\n                }\r\n               .download-app-section .app-linkpart a{max-width:150px}\r\n    }\r\n@media screen and (max-width:700px){\r\n    .partner-part { \r\n        min-height: 349px;\r\n    }\r\n    }\r\n@media screen and (max-width:576px){\r\n       \r\n            .banersearch .form-control {\r\n    height: 41px;\r\n    }\r\n    .banner-part-1{-webkit-box-ordinal-group:3;order:2}\r\n    .banner-absolute-part {    top: 0px; position: relative; }\r\n    .banner-img { \r\n    max-height: 820px;  min-height: 380px; }\r\n    .various-cuises-section h2{font-size:25px;}\r\n    .slick-arrow{top:-35px;}\r\n    .app-linkpart{margin-bottom:30px;}\r\n    .partner-part {  min-height: 200px;     margin-bottom: 30px; }\r\n    .partner-content-part p { \r\n        min-height: 20px;\r\n    }\r\n    .mobile-app-content-part h2{font-size:25px;}\r\n    .mobileapp-image-part{margin-top:20px;}\r\n    .app-linkpart a{max-width: 170px;}\r\n    .mobile-app-section{padding-top:30px;}\r\n    .mobile-app-content-part{top:0px; padding-top:0px;}\r\n    .download-image-part .app-linkpart {\r\n        text-align: left;    margin-bottom: 0;\r\n    }\r\n   \r\n    \r\n    }\r\n@media screen and (max-width:320px){\r\n        .various-cuises-section h2 {\r\n            font-size: 22px;\r\n        }\r\n        .partner-content-part h3 .partner-txt{width:74%;}\r\n        .app-linkpart a{width:170px; margin-bottom:10px;}\r\n       .download-app-section .app-linkpart a{    width: 130px;}\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGtCQUFrQixDQUFDLHNGQUFvRCxDQUFwRCxvREFBb0QsQ0FBQztBQUN4RixZQUFZLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBaUIsQ0FBakIsaUJBQWlCO0lBQ3ZELFdBQVcsQ0FBQztBQUNoQixzQkFBc0Isa0JBQWtCLENBQUMsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxZQUFZO0FBQzdGLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0FBQzVCLDBCQUEwQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEdBQUc7QUFDaEYsMEJBQTBCLGNBQWMsQ0FBQyxrQkFBa0IsRUFBRTtBQUM3RCxhQUFhLGVBQWUsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUMscUJBQXFCLENBQUM7QUFDcEYsMkJBQTJCLFdBQVcsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUM7QUFDeEUsb0JBQW9CLGdCQUFnQixFQUFFO0FBQ3RDLGFBQWEsZ0JBQWdCLENBQUM7QUFDOUIsK0JBQStCLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRTtBQUMxSDtJQUNJLFdBQVcsQ0FBQyx1QkFBZSxDQUFmLGVBQWU7SUFDM0Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixlQUFlLENBQUMsZ0JBQWdCO0lBQ2hDLGNBQWMsQ0FBQyxlQUFlO0lBQzlCLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0I7SUFDdEUsa0JBQWtCLENBQUM7QUFDbkIseUJBQXlCLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUUzRSxpQkFBaUIscUJBQXFCO1FBQ2xDLGdCQUFnQjtXQUNiLDJCQUEyQjtXQUMzQixpQkFBaUIsQ0FBQyxpQkFBaUI7V0FDbkMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLGVBQWU7V0FDbEUsa0JBQWtCLENBQUM7QUFDbkIscUJBQXFCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQztBQUMxRDtVQUNHLGVBQWUsQ0FBQyxVQUFVO09BQzdCO0FBQ0EsZUFBZSxxQkFBcUIsRUFBRTtBQUN0QyxxQkFBcUIsbUJBQW1CLEVBQUUsa0JBQWtCLENBQUM7QUFDN0Q7UUFDQyxpQkFBaUI7SUFDckI7QUFDRztRQUNDLGdCQUFnQjtJQUNwQjtBQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0FBRUEsaUJBQWlCLGdCQUFnQixDQUFDLGtCQUFrQjtBQUNwRDtRQUNJLHNCQUFzQjtJQUMxQjtBQUNBO1FBQ0ksbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCO1FBQ3RELHVCQUF1QixDQUFDLGdCQUFnQjtRQUN4QyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxzQ0FBc0M7SUFDN0U7QUFDQTtRQUNJLHdCQUF3QjtRQUN4QixnQkFBZ0I7SUFDcEI7QUFDQTtRQUNJLDJGQUEyRjtRQUMzRix3QkFBd0I7UUFDeEIsYUFBYTtRQUNiLDBCQUEwQjtRQUMxQixrQkFBa0I7SUFDdEI7QUFDQTtRQUNJLGVBQWU7U0FDZCx5QkFBeUI7UUFDMUIsY0FBYztRQUNkLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7QUFDQTtRQUNJLGdCQUFnQjtRQUNoQixlQUFlO0lBQ25CO0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsYUFBYSxDQUFDLFVBQVU7UUFDeEIsa0JBQWtCO1FBQ2xCLGVBQWUsQ0FBQyxzQkFBc0I7SUFDMUM7QUFDQSx3Q0FBd0MsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLGtCQUFrQjtRQUN2RyxnQkFBZ0I7SUFDcEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQjtBQUVBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsZ0JBQWdCLENBQUMsZ0JBQWdCO0lBQ3JDO0FBQ0E7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixrQkFBa0IsQ0FBQyxnQkFBZ0I7SUFDdkM7QUFDQTtRQUNJLHFCQUFxQjtRQUNyQixtQkFBbUI7SUFDdkI7QUFDQSwyQkFBMkIsZ0JBQWdCLENBQUMsbUJBQW1CLEdBQUc7QUFDbEUsa0RBQWtEO0FBQ2xELDJCQUEyQixlQUFlLENBQUMsZUFBZSxDQUFDLHVCQUFlLENBQWYsZUFBZTtRQUN0RSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsRUFBRSw2QkFBNkI7QUFDeEksNEJBQTRCLGNBQWMsRUFBRSxVQUFVLEdBQUcsaUJBQWlCLENBQUMsZUFBZSxFQUFFO0FBQzVGLCtCQUErQiw0QkFBNEIsQ0FBQyw2QkFBb0IsQ0FBcEIscUJBQXFCO0FBQ2pGLG9CQUFvQixVQUFVLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxvQkFBaUIsQ0FBakIsaUJBQWlCLENBQUMsc0JBQXNCO0FBQ25IO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0EseUJBQXlCLHVCQUF1QixHQUFHLGtDQUFrQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUU7QUFDdEksWUFBWSxZQUFZLENBQUM7QUFDekI7SUFDSSxRQUFRLENBQUMsdUJBQXVCO0lBQ2hDLFdBQVc7QUFDZjtBQUNBLFlBQVksV0FBVyxDQUFDO0FBQ3hCO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVcsQ0FBQyxrQ0FBa0M7SUFDOUMsZUFBZSxDQUFDLGFBQWE7RUFDL0I7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXLENBQUMsa0NBQWtDO0lBQzlDLGVBQWUsQ0FBQyxhQUFhO0VBQy9CO0FBQ0Usc0JBQXNCLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO0FBQzFEO1FBQ0ksZ0JBQWdCLEVBQUUsVUFBVTtJQUNoQztBQUNBO1FBQ0ksZUFBZTtRQUNmLG9CQUFvQixLQUFLLFdBQVc7SUFDeEM7QUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUVBLHVDQUF1QyxpQkFBaUIsQ0FBQztBQUV6RDs7UUFFSSxrQkFBa0IsdUJBQXVCLENBQUMsZ0JBQWdCO1FBQzFEO1FBQ0Esa0JBQWtCLGtCQUFrQixFQUFFO1FBQ3RDO1lBQ0ksZUFBZTtRQUNuQjtRQUNBLHlCQUF5QixnQkFBZ0I7SUFDN0M7QUFDQTtRQUNJLGtCQUFrQixpQkFBaUIsQ0FBQztRQUNwQyxvQkFBb0IsZUFBZSxFQUFFO1FBQ3JDLDJCQUEyQixtQkFBbUIsRUFBRTtRQUNoRDtZQUNJLGVBQWU7UUFDbkI7UUFDQSxvQkFBb0IsY0FBYyxDQUFDO1FBQ25DLHlCQUF5QixRQUFRLEtBQUssaUJBQWlCLENBQUM7UUFDeEQsc0JBQXNCLFFBQVEsQ0FBQztRQUMvQix5QkFBeUIsZUFBZSxDQUFDO1FBQ3pDLDBDQUEwQyxVQUFVO1lBQ2hELHNCQUFzQixLQUFLLGVBQWU7WUFDMUMsa0JBQWtCLENBQUM7UUFDdkI7WUFDSSxpQkFBaUI7UUFDckI7UUFDQSxpQkFBaUIsVUFBVSxFQUFFLFdBQVcsQ0FBQztRQUN6Qyx5QkFBeUIsY0FBYyxDQUFDO1FBQ3hDLG1CQUFtQixrQkFBa0IsQ0FBQztRQUN0Qyw0QkFBNEIsY0FBYyxLQUFLLG1CQUFtQjtZQUM5RCx1QkFBdUI7WUFDdkIsZ0JBQWdCLENBQUM7SUFDekI7QUFFQTtRQUNJLDRCQUE0QixlQUFlLENBQUM7UUFDNUMsd0JBQXdCLGdCQUFnQjtRQUN4QztZQUNJLHVCQUF1QjtZQUN2QixpQkFBaUI7UUFDckI7UUFDQTtZQUNJLGVBQWU7UUFDbkI7UUFDQSxrQkFBa0Isa0JBQWtCLEVBQUU7UUFDdEM7WUFDSSxlQUFlLENBQUM7SUFDeEI7QUFDQTtRQUNJLHlCQUF5QixnQkFBZ0I7UUFDekMseUJBQXlCLGNBQWMsQ0FBQztRQUN4QywwQ0FBMEMsVUFBVTtZQUNoRCxzQkFBc0I7WUFDdEIsa0JBQWtCLENBQUM7SUFDM0IsY0FBYyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUNwRDtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQSxvQkFBb0IsaUJBQWlCLENBQUM7SUFDdEM7UUFDSSxpQkFBaUI7SUFDckI7OztZQUdRO2dCQUNJLGVBQWU7WUFDbkI7WUFDQTtnQkFDSSxTQUFTO1lBQ2I7WUFDQTtnQkFDSSxpQkFBaUI7Z0JBQ2pCLGdCQUFnQjtZQUNwQjtZQUNBO2dCQUNJLFlBQVk7WUFDaEI7WUFDQSw0QkFBNEIsY0FBYyxLQUFLLG1CQUFtQjtnQkFDOUQsdUJBQXVCO2dCQUN2QixnQkFBZ0IsQ0FBQztZQUNyQixvQkFBb0IsZ0JBQWdCLENBQUM7WUFDckMsMkJBQTJCLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRTtZQUNqRiw0QkFBNEIsY0FBYyxDQUFDO1lBQzNDO2dCQUNJLGVBQWU7Z0JBQ2YsWUFBWTtZQUNoQjtZQUNBO2dCQUNJLGtCQUFrQjtZQUN0QjtZQUNBLHdCQUF3QixlQUFlLEVBQUU7WUFDekM7Z0JBQ0ksZUFBZTtZQUNuQjtZQUNBO2dCQUNJLGVBQWUsQ0FBQztnQkFDaEI7b0JBQ0ksaUJBQWlCO2dCQUNyQjtnQkFDQTtvQkFDSSxzQkFBc0I7Z0JBQzFCO2VBQ0Qsc0NBQXNDLGVBQWU7SUFDaEU7QUFDQTtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7QUFDQTs7WUFFUTtJQUNSLFlBQVk7SUFDWjtJQUNBLGVBQWUsMkJBQU0sQ0FBTixPQUFPO0lBQ3RCLDJCQUEyQixRQUFRLEVBQUUsa0JBQWtCLEVBQUU7SUFDekQ7SUFDQSxpQkFBaUIsR0FBRyxpQkFBaUIsRUFBRTtJQUN2QywyQkFBMkIsY0FBYyxDQUFDO0lBQzFDLGFBQWEsU0FBUyxDQUFDO0lBQ3ZCLGNBQWMsa0JBQWtCLENBQUM7SUFDakMsaUJBQWlCLGlCQUFpQixNQUFNLG1CQUFtQixFQUFFO0lBQzdEO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0EsNEJBQTRCLGNBQWMsQ0FBQztJQUMzQyxzQkFBc0IsZUFBZSxDQUFDO0lBQ3RDLGdCQUFnQixnQkFBZ0IsQ0FBQztJQUNqQyxvQkFBb0IsZ0JBQWdCLENBQUM7SUFDckMseUJBQXlCLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDbEQ7UUFDSSxnQkFBZ0IsS0FBSyxnQkFBZ0I7SUFDekM7OztJQUdBO0FBRUE7UUFDSTtZQUNJLGVBQWU7UUFDbkI7UUFDQSxzQ0FBc0MsU0FBUyxDQUFDO1FBQ2hELGdCQUFnQixXQUFXLEVBQUUsa0JBQWtCLENBQUM7T0FDakQsMENBQTBDLFlBQVksQ0FBQztJQUMxRCIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2Vic2l0ZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lci1zZWN0aW9ue3Bvc2l0aW9uOiByZWxhdGl2ZTtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byB0b3AsICNmOWY5ZjksICNmOWY5ZjkpO31cclxuLmJhbm5lci1pbWd7b3BhY2l0eTowLjU7bWF4LWhlaWdodDogNjIwcHg7b2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTt9XHJcbi5iYW5uZXItYWJzb2x1dGUtcGFydHtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOjExMHB4OyBtYXgtd2lkdGg6MTIwMHB4O3dpZHRoOjEwMCU7IHBhZGRpbmc6MTVweDsgXHJcbmxlZnQ6MDtyaWdodDowOyBtYXJnaW46YXV0bzt9XHJcbi5iYW5uZXItYWJzb2x1dGUtcGFydCBoMnsgZm9udC13ZWlnaHQ6IDcwMDtmb250LXNpemU6IDY0cHg7bWFyZ2luLWJvdHRvbToxMHB4OyA7fVxyXG4uYmFubmVyLWFic29sdXRlLXBhcnQgaDR7IGZvbnQtc2l6ZToyMHB4O21hcmdpbi1ib3R0b206MzBweDsgfVxyXG4uYmFuZXJzZWFyY2h7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6N3B4OyBib3JkZXItcmFkaXVzOiA1MHB4O2JvcmRlcjoxcHggc29saWQgI2VlZTt9XHJcbi5iYW5lcnNlYXJjaCAuZm9ybS1jb250cm9se2hlaWdodDo1MHB4O2JvcmRlcjpub25lOyBib3JkZXItcmFkaXVzOiA1MHB4O31cclxuLmlucHV0LWdyb3VwLWFwcGVuZHttYXJnaW4tbGVmdDogMHB4Ozt9XHJcbi5iYW5lcnNlYXJjaHttYXgtd2lkdGg6IDUwMHB4O31cclxuLmJhbmVyc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0e2JhY2tncm91bmQ6ICM4Y2MzNTc7Y29sb3I6I2ZmZjtib3JkZXItY29sb3I6ICM4Y2MzNTc7cGFkZGluZzo0cHggMTVweDtib3JkZXItcmFkaXVzOiA1MHB4Ozt9XHJcbi5vcmRlcm5vd2JhbmVyLWJ0bnsgIFxyXG4gICAgY29sb3I6ICNmZmY7dHJhbnNpdGlvbjogLjVzO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjOGNjMzU3O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtmb250LXdlaWdodDogNjAwOyBcclxuICAgIGxpbmUtaGVpZ2h0OiAxO2ZvbnQtc2l6ZTogMThweDs7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7IHdpZHRoOjIwMHB4O2Rpc3BsYXk6IGlubGluZS1ibG9jazttYXJnaW4tdG9wOiA0MHB4OztcclxuICAgIHBhZGRpbmc6IDE1cHggMzRweDt9XHJcbiAgICAub3JkZXJub3diYW5lci1idG46aG92ZXJ7Y29sb3I6IzAwMDt0ZXh0LWRlY29yYXRpb246IG5vbmU7YmFja2dyb3VuZDogI2ZmZjt9XHJcblxyXG4gICAgLmFwcC1saW5rcGFydCBheyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxODBweDs7XHJcbiAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhjYzM1NzNiO1xyXG4gICAgICAgICAgIGJvcmRlci1yYWRpdXM6NnB4O3BhZGRpbmc6MTBweCAxNXB4O1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjojMDAwO2JhY2tncm91bmQ6IzhjYzM1NzNiO2ZvbnQtd2VpZ2h0OjYwMDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7fVxyXG4gICAgICAgICAgIC5hcHAtbGlua3BhcnQgYSAuZmFie21hcmdpbi1yaWdodDoxMHB4O2ZvbnQtc2l6ZToyMXB4O31cclxuICAgICAgIC5hcHAtbGlua3BhcnQgLmdvb2dsZS1wbGF5bGluayB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiMwMDA7Y29sb3I6I2ZmZjtcclxuICAgICAgIH1cclxuICAgICAgIC5hcHBzdG9yZS1saW5re2JhY2tncm91bmQtY29sb3I6I2ZmZjs7fVxyXG4gICAgICAgLm1vYmlsZS1hcHAtc2VjdGlvbnsgcGFkZGluZzowcHggMHB4IDBweDsgcG9zaXRpb246IHJlbGF0aXZlO31cclxuICAgICAgIC5tb2JpbGUtYXBwLWNvbnRlbnQtcGFydCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MTUwcHg7XHJcbiAgICB9XHJcbiAgICAgICAubW9iaWxlLWFwcC1jb250ZW50LXBhcnQgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICAubW9iaWxlLWFwcC1jb250ZW50LXBhcnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMzgwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucGFydG5lci1zZWN0aW9ue3BhZGRpbmc6OTBweCAwcHg7YmFja2dyb3VuZDojZmJmYmZifVxyXG4gICAgLnBhcnRuZXItY29udGVudC1wYXJ0IGEgLmZhIHtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLnBhcnRuZXItcGFydCB7XHJcbiAgICAgICAgLyogZGlzcGxheTogZmxleDsgKi9tYXJnaW46MTVweCBhdXRvO2JvcmRlci1yYWRpdXM6NnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHggMzJweCA0NnB4O21heC13aWR0aDogNTMwcHg7O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7bWluLWhlaWdodDogMjc5cHg7Ym94LXNoYWRvdzogMCAzcHggMTVweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcbiAgICAucGFydG5lci1jb250ZW50LXBhcnQge1xyXG4gICAgICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhcnRuZXJpY29uLXBhcnQge1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMjQ3LCAyNDcsIDI0NywgMCksIHJnYigyMzYsIDIzNiwgMjM2KSk7ICovXHJcbiAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnBhcnRuZXJpY29uLXBhcnQgLmZhIHtcclxuICAgICAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICAgICAgIC8qIGJhY2tncm91bmQ6ICM4Y2MzNTc7ICovXHJcbiAgICAgICAgY29sb3I6ICM4Y2MzNTc7XHJcbiAgICAgICAgLyogcGFkZGluZzogMTBweDsgKi9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucGFydG5lci1jb250ZW50LXBhcnQgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgfVxyXG4gICAgLnBhcnRuZXItY29udGVudC1wYXJ0IGgzIC5mYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhjYzM1NztcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O2NvbG9yOiNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgLnBhcnRuZXItY29udGVudC1wYXJ0IGgzICAucGFydG5lci10eHR7IGJhY2tncm91bmQ6ICM4Y2MzNTc7cGFkZGluZzoxMHB4IDIwcHg7Y29sb3I6I2ZmZjttYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHdpZHRoOiA4MSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucGFydG5lci1jb250ZW50LXBhcnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4OyBcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7bWluLWhlaWdodDogODBweDs7XHJcbiAgICB9XHJcbiAgICAucGFydG5lci1jb250ZW50LXBhcnQgYSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhjYzM1NzNiO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHBhZGRpbmc6MTNweCAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLnZhcmlvdXMtY3Vpc2VzLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6NDBweCAwcHggNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgfVxyXG4gICAgLnZhcmlvdXMtY3Vpc2VzLXNlY3Rpb24gaDJ7Zm9udC13ZWlnaHQ6IDgwMDttYXJnaW4tYm90dG9tOiAyMHB4OyAgfVxyXG4gICAgLyogLnZhcmlvdXMtY3Vpc2luZXMtc2xpZGVye3Bvc2l0aW9uOiByZWxhdGl2ZTt9ICovXHJcbiAgICAudmFyaW91cy1zbGlkZXItaXRlbXBhcnR7ICBiYWNrZ3JvdW5kOiNmZmY7Y3Vyc29yOiBwb2ludGVyO3RyYW5zaXRpb246IC41czs7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbjoxNXB4IDEwcHg7IGJvcmRlci1yYWRpdXM6IDQwcHg7cGFkZGluZzoxMnB4IDEwcHg7IGJvcmRlcjoxcHggc29saWQgI2RkZDsgYm94LXNoYWRvdzowcHggM3B4IDEzcHggI2RkZCB9XHJcbi52YXJpb3VzLXNsaWRlci1pdGVtcGFydCBoNXtmb250LXNpemU6MTVweDsgY29sb3I6IzMzMzsgIHBhZGRpbmctbGVmdDoxMHB4O21hcmdpbi10b3A6MTVweDsgfVxyXG4udmFyaW91cy1zbGlkZXItaXRlbXBhcnQ6aG92ZXJ7Ym94LXNoYWRvdzogMnB4IDNweCA4cHggI2NjYzt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9XHJcbi5zbGljay1zbGlkZSBpbWcgeyAgd2lkdGg6NTBweDtoZWlnaHQ6NTBweDsgYm9yZGVyLXJhZGl1czogNTAlOztmbG9hdDpsZWZ0O29iamVjdC1maXQ6IGNvdmVyO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLnNsaWNrLWRvdHMgbGkgYnV0dG9uOjpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcbi5zbGljay1wcmV2LCAuc2xpY2stbmV4dHtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDsgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjt6LWluZGV4Ojk5O2JhY2tncm91bmQ6I2ZmZjtib3JkZXItcmFkaXVzOiA0MHB4Ozt9XHJcbi5zbGljay1kb3Rze2JvdHRvbTotMzVweDt9XHJcbi5zbGljay1hcnJvdyB7XHJcbiAgICB0b3A6IDQxJTtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxN3B4O1xyXG59XHJcbi5zbGljay1uZXh0e3JpZ2h0Oi0yMHB4O31cclxuLnNsaWNrLXByZXYge1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAtMjBweDs7XHJcbn1cclxuLnNsaWNrLXByZXY6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6XCJcXGYzNTlcIjtcclxuICAgIGNvbG9yOiAjMDAwO2ZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYzNWFcIjtcclxuICAgIGNvbG9yOiAjMDAwO2ZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAgIC5kb3dubG9hZC1hcHAtc2VjdGlvbntiYWNrZ3JvdW5kOiM4Y2MzNTc7cGFkZGluZzoxNXB4IDBweDt9XHJcbiAgICAuZG93bmxvYWQtY29udGVudHBhcnQgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiNmZmY7XHJcbiAgICB9XHJcbiAgICAuZG93bmxvYWQtY29udGVudHBhcnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4OyAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5kb3dubG9hZC1pbWFnZS1wYXJ0IC5hcHAtbGlua3BhcnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRvd25sb2FkLWFwcC1zZWN0aW9uICAuYXBwLWxpbmtwYXJ0IGF7cGFkZGluZzogMHB4IDEwcHg7fVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTEwMHB4KXtcclxuICAgICAgICBcclxuICAgICAgICAucGFydG5lci1wYXJ0eyAgICBwYWRkaW5nOiAzMnB4IDIycHggNDZweDttaW4taGVpZ2h0OjMzOXB4OztcclxuICAgICAgICB9IFxyXG4gICAgICAgIC5wYXJ0bmVyaWNvbi1wYXJ0e21hcmdpbi1yaWdodDogMTBweDs7fVxyXG4gICAgICAgIC5pbmZvLWNvbnRlbnQgc3Ryb25nIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9iaWxlLWFwcC1jb250ZW50LXBhcnR7cGFkZGluZy10b3A6OTBweH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTkycHgpe1xyXG4gICAgICAgIC5hcHAtbGlua3BhcnQgYXsgIG1hcmdpbi1yaWdodDoxMHB4O31cclxuICAgICAgICAubW9iaWxlLWFwcC1zZWN0aW9ue3BhZGRpbmctdG9wOjBweDs7fVxyXG4gICAgICAgIC5tb2JpbGUtYXBwLWNvbnRlbnQtcGFydCBwe21hcmdpbi1ib3R0b206IDIwcHg7O31cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYXBwLWxpbmtwYXJ0IGEgaW1ne21heC13aWR0aDogOTglO31cclxuICAgICAgICAubW9iaWxlLWFwcC1jb250ZW50LXBhcnR7dG9wOjMwcHg7ICAgIHBhZGRpbmctdG9wOiAxMHB4O31cclxuICAgICAgICAuYmFubmVyLWFic29sdXRlLXBhcnR7dG9wOjYwcHg7fVxyXG4gICAgICAgIC5iYW5uZXItYWJzb2x1dGUtcGFydCBoMntmb250LXNpemU6IDMwcHg7fVxyXG4gICAgICAgIC5wYXJ0bmVyLWNvbnRlbnQtcGFydCBoMyAucGFydG5lci10eHR7ICAgIHdpZHRoOiA3NSU7IFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTNweDt9XHJcbiAgICAgICAgLnBhcnRuZXItcGFydCB7IFxyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNTlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNsaWNrLXNsaWRlIGltZ3t3aWR0aDo0MHB4OyBoZWlnaHQ6NDBweDt9XHJcbiAgICAgICAgLmJhbm5lci1hYnNvbHV0ZS1wYXJ0IGg0e2ZvbnQtc2l6ZToxN3B4O31cclxuICAgICAgICAub3JkZXJub3diYW5lci1idG57cGFkZGluZzogMTBweCAyNHB4O31cclxuICAgICAgICAudmFyaW91cy1zbGlkZXItaXRlbXBhcnQgaDV7Zm9udC1zaXplOjE2cHg7ICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO31cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7IFxyXG4gICAgICAgIC52YXJpb3VzLXNsaWRlci1pdGVtcGFydCBoNXtmb250LXNpemU6IDE3cHg7fVxyXG4gICAgICAgIC52YXJpb3VzLWN1aXNlcy1zZWN0aW9ue3BhZGRpbmc6MjBweCAwcHh9IFxyXG4gICAgICAgIC5wYXJ0bmVyLXBhcnQgeyBcclxuICAgICAgICAgICAgcGFkZGluZzogMjJweCAxMnB4IDM2cHg7IFxyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNDlweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRuZXItY29udGVudC1wYXJ0IGgzIHsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBhcnRuZXJpY29uLXBhcnR7bWFyZ2luLXJpZ2h0OiAxMHB4Ozt9XHJcbiAgICAgICAgLnBhcnRuZXJpY29uLXBhcnQgLmZhIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O31cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgICAgIC5tb2JpbGUtYXBwLWNvbnRlbnQtcGFydHtwYWRkaW5nLXRvcDoxMHB4fVxyXG4gICAgICAgIC5iYW5uZXItYWJzb2x1dGUtcGFydCBoNXtmb250LXNpemU6MTdweDt9XHJcbiAgICAgICAgLnBhcnRuZXItY29udGVudC1wYXJ0IGgzIC5wYXJ0bmVyLXR4dHsgICAgd2lkdGg6IDc1JTsgXHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTNweDt9XHJcbiAgICAuY29udGluZm9wYXJ0e21pbi1oZWlnaHQ6IDUwcHg7cGFkZGluZy1ib3R0b206IDEwcHg7fVxyXG4gICAgLmNvbnRhY3QtcGFnZS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1oZWFkaW5nLXBhcnQgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLnNlY3Rpb24taGVhZGluZy1wYXJ0IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIH0gXHJcbiAgICAuYXBwLWxpbmtwYXJ0IGF7ICAgIHBhZGRpbmc6IDEwcHggOXB4O31cclxuICAgIC5pbmZvLWNvbnRlbnQgcCwgLmluZm8tY29udGVudCBwIGEge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgfSBcclxuICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIC5iYW5uZXItYWJzb2x1dGUtcGFydCBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhbm5lci1hYnNvbHV0ZS1wYXJ0IHtcclxuICAgICAgICAgICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3JkZXJub3diYW5lci1idG4ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOXB4IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYW5lcnNlYXJjaCAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIC52YXJpb3VzLXNsaWRlci1pdGVtcGFydCBoNXtmb250LXNpemU6MTRweDsgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjt9XHJcbiAgICAgICAgICAgIC5tb2JpbGUtYXBwLXNlY3Rpb257cGFkZGluZy10b3A6NTBweDt9XHJcbiAgICAgICAgICAgIC5tb2JpbGUtYXBwLWNvbnRlbnQtcGFydCBwe2ZvbnQtc2l6ZToxNXB4O21hcmdpbi1ib3R0b206IDExcHg7bGluZS1oZWlnaHQ6IDIycHg7O31cclxuICAgICAgICAgICAgLm1vYmlsZS1hcHAtY29udGVudC1wYXJ0IGgye2ZvbnQtc2l6ZToyOHB4O31cclxuICAgICAgICAgICAgLnBhcnRuZXJpY29uLXBhcnQgLmZhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDsgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wYXJ0bmVyaWNvbi1wYXJ0IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFydG5lci1jb250ZW50LXBhcnQgYXtmb250LXNpemU6IDE0cHg7O31cclxuICAgICAgICAgICAgLmRvd25sb2FkLWNvbnRlbnRwYXJ0IGgyIHsgXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvd25sb2FkLWNvbnRlbnRwYXJ0IHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O31cclxuICAgICAgICAgICAgICAgIC5kb3dubG9hZC1pbWFnZS1wYXJ0IC5hcHAtbGlua3BhcnQgeyBcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5wYXJ0bmVyLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDYwcHggMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIC5kb3dubG9hZC1hcHAtc2VjdGlvbiAuYXBwLWxpbmtwYXJ0IGF7bWF4LXdpZHRoOjE1MHB4fVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCl7XHJcbiAgICAucGFydG5lci1wYXJ0IHsgXHJcbiAgICAgICAgbWluLWhlaWdodDogMzQ5cHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU3NnB4KXtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAuYmFuZXJzZWFyY2ggLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyLXBhcnQtMXtvcmRlcjoyfVxyXG4gICAgLmJhbm5lci1hYnNvbHV0ZS1wYXJ0IHsgICAgdG9wOiAwcHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxyXG4gICAgLmJhbm5lci1pbWcgeyBcclxuICAgIG1heC1oZWlnaHQ6IDgyMHB4OyAgbWluLWhlaWdodDogMzgwcHg7IH1cclxuICAgIC52YXJpb3VzLWN1aXNlcy1zZWN0aW9uIGgye2ZvbnQtc2l6ZToyNXB4O31cclxuICAgIC5zbGljay1hcnJvd3t0b3A6LTM1cHg7fVxyXG4gICAgLmFwcC1saW5rcGFydHttYXJnaW4tYm90dG9tOjMwcHg7fVxyXG4gICAgLnBhcnRuZXItcGFydCB7ICBtaW4taGVpZ2h0OiAyMDBweDsgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cclxuICAgIC5wYXJ0bmVyLWNvbnRlbnQtcGFydCBwIHsgXHJcbiAgICAgICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5tb2JpbGUtYXBwLWNvbnRlbnQtcGFydCBoMntmb250LXNpemU6MjVweDt9XHJcbiAgICAubW9iaWxlYXBwLWltYWdlLXBhcnR7bWFyZ2luLXRvcDoyMHB4O31cclxuICAgIC5hcHAtbGlua3BhcnQgYXttYXgtd2lkdGg6IDE3MHB4O31cclxuICAgIC5tb2JpbGUtYXBwLXNlY3Rpb257cGFkZGluZy10b3A6MzBweDt9XHJcbiAgICAubW9iaWxlLWFwcC1jb250ZW50LXBhcnR7dG9wOjBweDsgcGFkZGluZy10b3A6MHB4O31cclxuICAgIC5kb3dubG9hZC1pbWFnZS1wYXJ0IC5hcHAtbGlua3BhcnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIwcHgpe1xyXG4gICAgICAgIC52YXJpb3VzLWN1aXNlcy1zZWN0aW9uIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFydG5lci1jb250ZW50LXBhcnQgaDMgLnBhcnRuZXItdHh0e3dpZHRoOjc0JTt9XHJcbiAgICAgICAgLmFwcC1saW5rcGFydCBhe3dpZHRoOjE3MHB4OyBtYXJnaW4tYm90dG9tOjEwcHg7fVxyXG4gICAgICAgLmRvd25sb2FkLWFwcC1zZWN0aW9uIC5hcHAtbGlua3BhcnQgYXsgICAgd2lkdGg6IDEzMHB4O31cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/website/components/home/home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/website/components/home/home.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm2015/ngx-wow.js");



let HomeComponent = class HomeComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.slides = [
            { img: "assets/images/imageone.jpg", name: 'Pharmacy' },
            { img: "assets/images/imageone.jpg", name: 'Charity' },
            { img: "assets/images/imageone.jpg", name: 'Entertainment' },
            { img: "assets/images/imageone.jpg", name: 'Home Appliance' },
            { img: "assets/images/imageone.jpg", name: 'Health supplements' },
            { img: "assets/images/imageone.jpg", name: 'Cosmetics' },
            { img: "assets/images/imageone.jpg", name: 'Electronics' },
            { img: "assets/images/imageone.jpg", name: 'International' },
        ];
        this.slideConfig = { "slidesToShow": 4, "slidesToScroll": 4, prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        this.wowService.init();
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/modules/website/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/website/components/privacy-policy/privacy-policy.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/website/components/privacy-policy/privacy-policy.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**policy page*/\r\n.policy-section{padding:30px 0px 60px;}\r\n.policy-content h3{font-weight: 600;margin-bottom: 20px;font-size:25px;margin-top:20px;;}\r\n.policy-content h4{font-weight: 600;margin-bottom:15px;font-size:18px;;}\r\n.policy-content p{line-height: 30px; color:#777;}\r\n@media screen and (max-width:767px){\r\n    .policy-section{padding-top:10px}\r\n    .section-heading-part{padding-bottom: 0px;;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2YsZ0JBQWdCLHFCQUFxQixDQUFDO0FBQ3RDLG1CQUFtQixnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFO0FBQ3hGLG1CQUFtQixnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUU7QUFDdkUsa0JBQWtCLGlCQUFpQixFQUFFLFVBQVUsQ0FBQztBQUVoRDtJQUNJLGdCQUFnQixnQkFBZ0I7SUFDaEMsc0JBQXNCLG1CQUFtQixFQUFFO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKnBvbGljeSBwYWdlKi9cclxuLnBvbGljeS1zZWN0aW9ue3BhZGRpbmc6MzBweCAwcHggNjBweDt9XHJcbi5wb2xpY3ktY29udGVudCBoM3tmb250LXdlaWdodDogNjAwO21hcmdpbi1ib3R0b206IDIwcHg7Zm9udC1zaXplOjI1cHg7bWFyZ2luLXRvcDoyMHB4Ozt9XHJcbi5wb2xpY3ktY29udGVudCBoNHtmb250LXdlaWdodDogNjAwO21hcmdpbi1ib3R0b206MTVweDtmb250LXNpemU6MThweDs7fVxyXG4ucG9saWN5LWNvbnRlbnQgcHtsaW5lLWhlaWdodDogMzBweDsgY29sb3I6Izc3Nzt9XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5wb2xpY3ktc2VjdGlvbntwYWRkaW5nLXRvcDoxMHB4fVxyXG4gICAgLnNlY3Rpb24taGVhZGluZy1wYXJ0e3BhZGRpbmctYm90dG9tOiAwcHg7O31cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/website/components/privacy-policy/privacy-policy.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/website/components/privacy-policy/privacy-policy.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyPolicyComponent = class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: __webpack_require__(/*! raw-loader!./privacy-policy.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/privacy-policy/privacy-policy.component.html"),
        styles: [__webpack_require__(/*! ./privacy-policy.component.css */ "./src/app/modules/website/components/privacy-policy/privacy-policy.component.css")]
    })
], PrivacyPolicyComponent);



/***/ }),

/***/ "./src/app/modules/website/components/terms-of-use/terms-of-use.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/website/components/terms-of-use/terms-of-use.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*terms page**/\r\n.terms-section{padding:30px 0px 60px;}\r\n.terms-content p{text-align: justify;;line-height: 30px;;}\r\n@media screen and (max-width:767px){\r\n    .terms-section{padding-top:10px}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvdGVybXMtb2YtdXNlL3Rlcm1zLW9mLXVzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7QUFDZCxlQUFlLHFCQUFxQixDQUFDO0FBQ3JDLGlCQUFpQixtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRTtBQUN6RDtJQUNJLGVBQWUsZ0JBQWdCO0FBQ25DIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy93ZWJzaXRlL2NvbXBvbmVudHMvdGVybXMtb2YtdXNlL3Rlcm1zLW9mLXVzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp0ZXJtcyBwYWdlKiovXHJcbi50ZXJtcy1zZWN0aW9ue3BhZGRpbmc6MzBweCAwcHggNjBweDt9XHJcbi50ZXJtcy1jb250ZW50IHB7dGV4dC1hbGlnbjoganVzdGlmeTs7bGluZS1oZWlnaHQ6IDMwcHg7O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAudGVybXMtc2VjdGlvbntwYWRkaW5nLXRvcDoxMHB4fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/modules/website/components/terms-of-use/terms-of-use.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/website/components/terms-of-use/terms-of-use.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TermsOfUseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUseComponent", function() { return TermsOfUseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_websiteservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/websiteservice.service */ "./src/app/_services/websiteservice.service.ts");



let TermsOfUseComponent = class TermsOfUseComponent {
    constructor(webservices) {
        this.webservices = webservices;
    }
    ngOnInit() {
        this.getTermUseContent();
    }
    getTermUseContent() {
        this.webservices.getTermCondition().subscribe((data) => {
            this.termsContent = data;
            console.log('terms data', this.termsContent);
        });
    }
};
TermsOfUseComponent.ctorParameters = () => [
    { type: _services_websiteservice_service__WEBPACK_IMPORTED_MODULE_2__["WebsiteserviceService"] }
];
TermsOfUseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-of-use',
        template: __webpack_require__(/*! raw-loader!./terms-of-use.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/components/terms-of-use/terms-of-use.component.html"),
        styles: [__webpack_require__(/*! ./terms-of-use.component.css */ "./src/app/modules/website/components/terms-of-use/terms-of-use.component.css")]
    })
], TermsOfUseComponent);



/***/ }),

/***/ "./src/app/modules/website/website-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/website/website-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: WebsiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteRoutingModule", function() { return WebsiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/modules/website/components/home/home.component.ts");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./website.component */ "./src/app/modules/website/website.component.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/modules/website/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/modules/website/components/about-us/about-us.component.ts");
/* harmony import */ var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/privacy-policy/privacy-policy.component */ "./src/app/modules/website/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/terms-of-use/terms-of-use.component */ "./src/app/modules/website/components/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/careers/careers.component */ "./src/app/modules/website/components/careers/careers.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/modules/website/components/faqs/faqs.component.ts");
/* harmony import */ var _components_dammam_dammam_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dammam/dammam.component */ "./src/app/modules/website/components/dammam/dammam.component.ts");












const routes = [
    { path: '', component: _website_component__WEBPACK_IMPORTED_MODULE_4__["WebsiteComponent"], children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'contact-us', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
            { path: 'about-us', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
            { path: 'privacy-policy', component: _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyComponent"] },
            { path: 'terms-of-use', component: _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_8__["TermsOfUseComponent"] },
            { path: 'careers', component: _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_9__["CareersComponent"] },
            { path: 'faqs', component: _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_10__["FaqsComponent"] },
            { path: 'dammam', component: _components_dammam_dammam_component__WEBPACK_IMPORTED_MODULE_11__["DammamComponent"] },
        ] }
];
let WebsiteRoutingModule = class WebsiteRoutingModule {
};
WebsiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WebsiteRoutingModule);



/***/ }),

/***/ "./src/app/modules/website/website.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/website/website.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2Vic2l0ZS93ZWJzaXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/website/website.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/website/website.component.ts ***!
  \******************************************************/
/*! exports provided: WebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function() { return WebsiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WebsiteComponent = class WebsiteComponent {
    constructor() { }
    ngOnInit() {
    }
};
WebsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-website',
        template: __webpack_require__(/*! raw-loader!./website.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/website/website.component.html"),
        styles: [__webpack_require__(/*! ./website.component.css */ "./src/app/modules/website/website.component.css")]
    })
], WebsiteComponent);



/***/ }),

/***/ "./src/app/modules/website/website.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/website/website.module.ts ***!
  \***************************************************/
/*! exports provided: WebsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _website_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website-routing.module */ "./src/app/modules/website/website-routing.module.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/modules/website/components/home/home.component.ts");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./website.component */ "./src/app/modules/website/website.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "./src/app/modules/website/components/contact-us/contact-us.component.ts");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "./src/app/modules/website/components/about-us/about-us.component.ts");
/* harmony import */ var _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/privacy-policy/privacy-policy.component */ "./src/app/modules/website/components/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/terms-of-use/terms-of-use.component */ "./src/app/modules/website/components/terms-of-use/terms-of-use.component.ts");
/* harmony import */ var _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/careers/careers.component */ "./src/app/modules/website/components/careers/careers.component.ts");
/* harmony import */ var _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/faqs/faqs.component */ "./src/app/modules/website/components/faqs/faqs.component.ts");
/* harmony import */ var _components_dammam_dammam_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dammam/dammam.component */ "./src/app/modules/website/components/dammam/dammam.component.ts");














let WebsiteModule = class WebsiteModule {
};
WebsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _website_component__WEBPACK_IMPORTED_MODULE_5__["WebsiteComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"], _components_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_9__["PrivacyPolicyComponent"], _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_10__["TermsOfUseComponent"], _components_careers_careers_component__WEBPACK_IMPORTED_MODULE_11__["CareersComponent"], _components_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_12__["FaqsComponent"], _components_dammam_dammam_component__WEBPACK_IMPORTED_MODULE_13__["DammamComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _website_routing_module__WEBPACK_IMPORTED_MODULE_3__["WebsiteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], WebsiteModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
const environment = {
    production: false,
    BASE_URL: 'https://my.api.mockaroo.com/'
};



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Downloads\dietcater-com-code new (1)\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map