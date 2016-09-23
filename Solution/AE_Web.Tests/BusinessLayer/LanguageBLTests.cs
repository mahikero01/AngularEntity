using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AE_BusinessLayer;

namespace AE_Web.Tests.BusinessLayer
{
    [TestClass]
    public class LanguageBLTests
    {
        [TestMethod]
        public void STReadLanguageID_Get_ReturnInt()
        {
            var languageBL = new LanguageBL();
            languageBL.STReadLanguageID();
        }
    }
}
