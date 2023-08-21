using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUD.Models;
using Microsoft.EntityFrameworkCore;
using CRUD.Data;
using System.Data;

namespace CRUD.Repository
{
    public class DeptRepo: IDepartment<Department>
    {
         ApplicationDB _dbcontext;
       
        public DeptRepo(ApplicationDB dbcontext)
        {
            _dbcontext = dbcontext;
        }
        //method to add department
        #region
        public void AddDepartment(Department dept)
        {
            _dbcontext.Departments.Add(dept);
            _dbcontext.SaveChanges();
        }
        #endregion

        //method to delete Department
        #region
        public void DeleteDepartment(int id)
        {
            Department dept = _dbcontext.Departments.Find(id);
            _dbcontext.Departments.Remove(dept);
            _dbcontext.SaveChanges();

        }
        #endregion

        //method to get all the department details
        #region
        public IEnumerable<Department> Get()
        {
            return _dbcontext.Departments.ToList();
        }
        #endregion

        public Department GetById(int id)
        {
            return _dbcontext.Departments.Find(id);
        }
        //method to update the department
        #region
        public void UpdateDepartment(int id, Department dept)
        {
            var department = _dbcontext.Departments.Find(id);
            department.Name = dept.Name;
            department.Location = dept.Location;
            department.HeadOfDept = dept.HeadOfDept; 
            _dbcontext.Entry(department).State =EntityState.Modified;
            _dbcontext.SaveChanges();

        }
        #endregion
    }
}