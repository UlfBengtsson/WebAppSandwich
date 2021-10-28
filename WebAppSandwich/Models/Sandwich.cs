using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppSandwich.Models
{
    public class Sandwich
    {
        int id;
        public int Id { get { return id; } }
        public Ingrediens[] Ingrediens { get; set; }

        public Sandwich(int id, params Ingrediens[] ingrediens)
        {
            this.id = id;
            Ingrediens = ingrediens;
        }
    }
}
