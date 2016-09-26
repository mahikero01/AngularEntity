using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace AE_Web.Tests
{
    public class LanguageBL
    {
        private IAngularEntityContext _context;
        public string _message = "";

        public LanguageBL(IAngularEntityContext context)
        {
            _context = context;
        }

        public bool CreateLanguage(string name, string description)
        {
            var language = new AE_Languages { LanguageName = name, LanguageDescr = description };
            bool success = true;

            _message = BusinessComponents.MSG_LANGUAGEBL_CREATELANGUAGE_SAVEOK;
            try
            {
                _context.AE_Languages.Add(language);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                success = false;
                _message = BusinessComponents.MSG_LANGUAGEBL_CREATELANGUAGE_SAVEERROR;
                _message += " Runtime Error: " + e.Message;
            }

            return success;
        }

        public List<string> ReadAllLanguageName()
        {
            List<string> languageList = new List<string>();

            var languageNames = from l in _context.AE_Languages
                                   select l.LanguageName;

            foreach (string languageName in languageNames)
            {
                languageList.Add(languageName);
            }

            return languageList;
        }

        public List<AE_Languages> ReadAllLanguageObject()
        {
            List<AE_Languages> languageList = new List<AE_Languages>();

            var languages = from l in _context.AE_Languages
                            select l;

            foreach (AE_Languages language in languages)
            {
                languageList.Add(language);
            }
            
            return languageList;
        }
    }
}