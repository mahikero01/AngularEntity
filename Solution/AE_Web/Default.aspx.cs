using AE_BusinessLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using System.Web.Services;

namespace AE_Web
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
            
        }

        [WebMethod]
        public static string CallMe()
        {

            return "You called me on " + DateTime.Now.ToString();

        }
    }
}