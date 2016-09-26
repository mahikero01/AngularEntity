using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;

namespace AE_Web.Tests
{
    [TestClass]
    public class LanguageBLTests
    {
        [TestMethod]
        public void CreateLanguage_Post_ReturnBool()
        {
            var context = new TestContext();
            var languageBL = new LanguageBL(context);
            var result = languageBL.CreateLanguage("Java", "Stable Language");

            Assert.AreEqual(true, result);
            Assert.AreEqual(1, context.AE_Languages.Count());
            Assert.AreEqual("Java", context.AE_Languages.Single().LanguageName);
            Assert.AreEqual("Stable Language", context.AE_Languages.Single().LanguageDescr);
        }

        [TestMethod]
        public void ReadLanguage_Get_ReturnListOfString()
        {
            var context = new TestContext();
            var languageBL = new LanguageBL(context);

            languageBL.CreateLanguage("Java", "Stable Language");
            languageBL.CreateLanguage("Php", "SLanguage");
            languageBL.CreateLanguage("C#", "T Language");

            List<string> languageList = new List<string>();
            languageList = languageBL.ReadAllLanguageName();

            Assert.AreEqual("Java", languageList[0]);
            Assert.AreEqual("Php", languageList[1]);
            Assert.AreEqual(3, languageList.Count());
        }

        [TestMethod]
        public void ReadAllLanguageObject_Get_ReturnListOfObject()
        {
            var context = new TestContext();
            var languageBL = new LanguageBL(context);

            languageBL.CreateLanguage("Java", "Stable Language");
            languageBL.CreateLanguage("Php", "SLanguage");
            languageBL.CreateLanguage("C#", "T Language");

            List<AE_Languages> languageList = new List<AE_Languages>();
            languageList = languageBL.ReadAllLanguageObject();

            Assert.AreEqual("Java", languageList[0].LanguageName);
            Assert.AreEqual("Php", languageList[1].LanguageName);
            Assert.AreEqual(3, languageList.Count());
        }

    }
}
