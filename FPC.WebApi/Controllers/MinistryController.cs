using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using FPC.WebApi.Models;

namespace FPC.WebApi.Controllers
{
  public class MinistryController : ApiController
  {
    public IEnumerable<Assignment> GetAllAssignments()
    {
      var assignments = new List<Assignment>();
      string path = HttpRuntime.AppDomainAppPath + "App_Data/ministrydata.txt";
      int id = 0;
      string line;

      try
      {
        using (StreamReader file = new StreamReader(path))
        {
          //skip first 13 lines that guide remainder of file
          for (var i = 0; i < 13; i++)
          {
            file.ReadLine();
          }

          while ((line = file.ReadLine()) != null)
          {
            assignments.Add(new Assignment()
            {
              Date = DateTime.Parse(line.Trim()),
              Altar = file.ReadLine().Trim(),
              Announcements = file.ReadLine().Trim(),
              Baptism = file.ReadLine().Trim(),
              Bus1 = file.ReadLine().Trim(),
              Bus2 = file.ReadLine().Trim(),
              Bus3 = file.ReadLine().Trim(),
              Greeter = file.ReadLine().Trim(),
              Inspiration = file.ReadLine().Trim(),
              Nursery = file.ReadLine().Trim(),
              Parking = file.ReadLine().Trim(),
              Sound = file.ReadLine().Trim(),
              Usher = file.ReadLine().Trim()
            });
          }
        }
      }
      catch (Exception ex)
      {

      }

      return assignments.Where(e=>e.Date > DateTime.Today.AddDays(-1));
    }
  }
}
