using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using CRUD.Models;
using Microsoft.EntityFrameworkCore;
using CRUD.Data;
using System.Data;

namespace CRUD.Repository
{
    public class EmpRepo: IEmployee<Employee>
    {
         ApplicationDB _dbcontext;
       
        public EmpRepo(ApplicationDB dbcontext)
        {
            _dbcontext = dbcontext;
        }
        //method to add employee
        #region
        public void AddEmployee(Employee emp)
        {
            _dbcontext.Employees.Add(emp);
            _dbcontext.SaveChanges();
        }
        #endregion

        //method to delete employee
        #region
        public void DeleteEmployee(int id)
        {
            Employee emp = _dbcontext.Employees.Find(id);
            _dbcontext.Employees.Remove(emp);
            _dbcontext.SaveChanges();

        }
        #endregion

        //method to get all the user details
        #region
        public IEnumerable<Employee> Get()
        {
            return _dbcontext.Employees.ToList();
        }
        #endregion

        public Employee GetById(int id)
        {
            return _dbcontext.Employees.Find(id);
        }
        //method to update the user
        #region
        public void UpdateEmployee(int id, Employee emp)
        {
            var employee = _dbcontext.Employees.Find(id);
            employee.FirstName = emp.FirstName;
            employee.LastName = emp.LastName;
            employee.Email = emp.Email;
            employee.MobileNo = emp.MobileNo;
            employee.Salary = emp.Salary;
            employee.Role = emp.Role;
            _dbcontext.Entry(employee).State =EntityState.Modified;
            _dbcontext.SaveChanges();

        }
        #endregion
    }
}