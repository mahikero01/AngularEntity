using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AE_Web.Tests
{
    public class LanguageCountryBL
    {
        private IAngularEntityContext _context;
        public string _message = "";

        public LanguageCountryBL(IAngularEntityContext context)
        {
            _context = context;
        }

        public void Computetable()
        {

            var countryNames = from c in _context.AE_Countries
                                select c.CountryName;

            var languageNames = from l in _context.AE_Languages
                                select l.LanguageName;

            
           
            
          }
    }
}
