const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const port = process.env.PORT || 3000;

// Configuración del puerto y escucha del servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Configura CORS (opcional)
app.use(cors());

// ///////////Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Inicializa Supabasesdsds
const supabaseUrl = "https://cqrallbhjbcavflvsuya.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxcmFsbGJoamJjYXZmbHZzdXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwMzkxMTcsImV4cCI6MjA1MjYxNTExN30.McZrsR8krRNivqrFKf801KzZEDwkC3r9rKr0vgtrarY";
const supabase = createClient(supabaseUrl, supabaseKey);

// Endpoint de prueba
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Endpoint para obtener todos los developers
app.get("/developers", async (req, res) => {
  try {
    const { data, error } = await supabase.from("developers").select("*");
    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }
    res.status(200).json(data);
  } catch (err) {
    console.error("Fetch failed:", err);
    res.status(500).json({ error: err.message });
  }
});

// Endpoint para agregar un nuevo developer
app.post("/developers", async (req, res) => {
  try {
    const {
      full_name,
      age,
      birth_date,
      phone_number,
      nacionality,
      summary,
      stack,
      main_stack_technology,
      profile_image,
      linkedin_profile,
      github_profile,
    } = req.body;

    const { data, error } = await supabase.from("developers").insert([
      {
        full_name,
        age,
        birth_date,
        phone_number,
        nacionality,
        summary,
        stack,
        main_stack_technology,
        profile_image,
        linkedin_profile,
        github_profile,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }
    res.status(201).json(data);
  } catch (err) {
    console.error("Fetch failed:", err);
    res.status(500).json({ error: err.message });
  }
});
