using AE_Web;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AE_DataAccessLayer
{
    public class LanguageDAL
    {
        public IQueryable<AE_Languages> ReadLanguages()
        {
            var context = new AngularEntityEntities();
            
                var languages = from l in context.AE_Languages
                                select l;

                return languages;
            
        }
    }
}