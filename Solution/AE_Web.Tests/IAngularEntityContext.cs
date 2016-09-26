using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;

namespace AE_Web.Tests
{
    public interface IAngularEntityContext
    {
        DbSet<AE_Languages> AE_Languages { get; }
        DbSet<AE_Countries> AE_Countries { get; }

        int SaveChanges();
    }
}