using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CRUD.Models;
using CRUD.Data;

namespace CRUD.Repository
{
    public interface IEmployee<TEntity>
    {
        IEnumerable<TEntity> Get();

        TEntity GetById(int id);

        void DeleteEmployee(int id);

        void UpdateEmployee(int id, TEntity employee);

        void AddEmployee(TEntity employee);
    }
}