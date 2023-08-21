using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CRUD.Models;
using CRUD.Data;

namespace CRUD.Repository
{
    public interface IDepartment<TEntity>
    {
        IEnumerable<TEntity> Get();

        TEntity GetById(int id);

        void DeleteDepartment(int id);

        void UpdateDepartment(int id, TEntity Dept);

        void AddDepartment(TEntity Dept);
    }
}