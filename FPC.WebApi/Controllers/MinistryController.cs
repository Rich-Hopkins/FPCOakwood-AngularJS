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
    public IEnumerable<MinistryEvent> GetAllAssignments()
    {
      var ministryEvents = new List<MinistryEvent>();
      MinistryEvent mE = new MinistryEvent();
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

          var assignments = new List<Assignment>();
          while ((line = file.ReadLine()) != null)
          {

            if (line == "")
            {
              mE.Assignments = assignments;
              ministryEvents.Add(mE);
              assignments = new List<Assignment>();
            }
            else
            {
              var l = line.Split(',').Select(p=>p.Trim()).ToArray();
              if (l[0].ToLower() == "date")
              {
                mE = new MinistryEvent(l[1]);
              }
              else
              {
                var a = new Assignment(l[0]);
                var list = new List<string>();
                for (var i = 1; i < l.Length; i++)
                {
                  list.Add(l[i]);
                }
                a.Names = list;
                assignments.Add(a);
              }
            }
          }
          mE.Assignments = assignments;
          ministryEvents.Add(mE);

        }
      }
      catch (Exception ex)
      {

      }

      return ministryEvents; //assignments.Where(e=>e.Date > DateTime.Today.AddDays(-1));
    }
  }
}
