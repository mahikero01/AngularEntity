using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.UI;

namespace AE_WebComponent
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkID=303951
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/WebFormsJs").Include(
                            "~/Scripts/WebForms/WebForms.js",
                            "~/Scripts/WebForms/WebUIValidation.js",
                            "~/Scripts/WebForms/MenuStandards.js",
                            "~/Scripts/WebForms/Focus.js",
                            "~/Scripts/WebForms/GridView.js",
                            "~/Scripts/WebForms/DetailsView.js",
                            "~/Scripts/WebForms/TreeView.js",
                            "~/Scripts/WebForms/WebParts.js"));

            // Order is very important for these files to work, they have explicit dependencies
            bundles.Add(new ScriptBundle("~/bundles/MsAjaxJs").Include(
                    "~/Scripts/WebForms/MsAjax/MicrosoftAjax.js",
                    "~/Scripts/WebForms/MsAjax/MicrosoftAjaxApplicationServices.js",
                    "~/Scripts/WebForms/MsAjax/MicrosoftAjaxTimer.js",
                    "~/Scripts/WebForms/MsAjax/MicrosoftAjaxWebForms.js"));

            // Use the Development version of Modernizr to develop with and learn from. Then, when you’re
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                            "~/Scripts/modernizr-*"));

            //Using AngularJS
            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                    "~/Scripts/angular.min.js",
                    "~/Scripts/angular-animate.min.js",
                    "~/Scripts/angular-ui/ui.bootstrap-tpls.min.js",
                    //"~/Scripts/angular-ui/ui.bootstrap.min.js",
                    "~/Scripts/Client_App/angularEntityApp.js",
                    "~/Scripts/Client_App/Services/httpService.js",
                    "~/Scripts/Client_App/Components/Default_Page/languageList.js",
                    "~/Scripts/Client_App/Components/Default_Page/languageDetail.js",
                    "~/Scripts/Client_App/Components/Default_Page/testAnimation.js",
                    "~/Scripts/Client_App/Components/Default_Page/testDire.js"));

            ScriptManager.ScriptResourceMapping.AddDefinition(
                "respond",
                new ScriptResourceDefinition
                {
                    Path = "~/Scripts/respond.min.js",
                    DebugPath = "~/Scripts/respond.js",
                });

            ScriptManager.ScriptResourceMapping.AddDefinition(
                "jquery",
                new ScriptResourceDefinition
                {
                    Path = "~/Scripts/jquery-1.12.4.min.js",
                    DebugPath = "~/Scripts/jquery-1.12.4.min.js",
                });

            ScriptManager.ScriptResourceMapping.AddDefinition(
                "jqueryui",
                new ScriptResourceDefinition
                {
                    Path = "~/Scripts/jquery-ui-1.12.1.min.js",
                    DebugPath = "~/Scripts/jquery-ui-1.12.1.min.js",
                });
        }
    }
}