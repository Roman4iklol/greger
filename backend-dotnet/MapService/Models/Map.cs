﻿namespace MapService.Models
{
    public class Map
    {
        public Map()
        {
            this.projections = new List<Projection>();
            this.tools = new List<Tool>();
        }

        public string? version { get; set; }

        public List<Projection> projections { get; set; }

        public List<Tool> tools { get; set; }

        public MapSettings map { get; set; }
    }
}
