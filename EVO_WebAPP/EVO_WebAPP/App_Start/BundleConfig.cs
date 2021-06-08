using System.Web;
using System.Web.Optimization;

namespace EVO_WebAPP
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            /*ScriptBundle scriptBndl = new ScriptBundle("~/bundles/scripts");
            ScriptBundle OAscriptBndl = new ScriptBundle("~/bundles/OAscripts");
            ScriptBundle GAscriptBndlExcess = new ScriptBundle("~/bundles/GAscriptsExcess");
            StyleBundle OAstylebundle = new StyleBundle("~/bundles/OAstyle");
            StyleBundle GAstylebundle = new StyleBundle("~/bundles/GAstyle");

            scriptBndl.Include("~/Content/libs/jquery/jquery-3.5.1.js", "~/Content/js/popper.min.js", "~/Content/libs/jquery-ui/jquery-ui.js", "~/Content/libs/bootstrap/bootstrap.bundle.min.js", "~/Content/libs/datatable/jquery.dataTables.min.js",
                "~/Content/libs/datatable/dataTables.bootstrap4.min.js", "~/Content/libs/select2/fSelect.js");

            OAscriptBndl.Include("~/Content/libs/select2/select2.min.js", "~/Content/libs/date-picker/datepicker.js", "~/Scripts/Nav.js", "~/Content/libs/validate/jquery.validate.min.js",
               "~/Content/js/main.js", "~/Content/libs/list-js/list.min.js", "~/Content/libs/bootstrap-tag/bootstrap-tagsinput.js", "~/Content/libs/range-slider/ion.rangeSlider.min.js");

            GAscriptBndlExcess.Include("~/Content/libs/date-picker/datepicker.js", "~/Scripts/Nav.js", "~/Content/libs/validate/jquery.validate.min.js",
            "~/Content/js/main.js", "~/Scripts/common.js");


            OAstylebundle.Include("~/Content/libs/datatable/dataTables.bootstrap4.min.css", "~/Content/libs/select2/fSelect.css", "~/Content/libs/select2/select2.min.css", "~/Content/libs/bootstrap/bootstrap.min.css", "~/Content/css/other-style.css", "~/Content/css/ctsi-style.css", "~/Content/libs/toastr/toastr.min.css",
            "~/Content/libs/date-picker/datepicker.css", "~/Content/libs/range-slider/ion.rangeSlider.min.css", "~/Content/libs/bootstrap-tag/bootstrap-tagsinput.css");

            GAstylebundle.Include("~/Content/libs/datatable/dataTables.bootstrap4.min.css",
                "~/Content/libs/bootstrap/bootstrap.min.css", "~/Content/css/other-style.css", "~/Content/css/ctsi-style.css");*/

            //Original
            //------------------------------

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //------------------------------

            /*bundles.Add(scriptBndl);
            bundles.Add(OAscriptBndl);
            bundles.Add(OAstylebundle);

            bundles.Add(GAstylebundle);
            bundles.Add(GAscriptBndlExcess);*/

            //BundleTable.EnableOptimizations = true;
        }
    }
}
