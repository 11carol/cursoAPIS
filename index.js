import app from "./config/express.js"

const porta = 3000; // declarando a porta

const router = express.Router(); //Instanciar uma rota

router.get("/", async (req, res, next) => {
  res.json({})
});

app.use("/", router);

app.listen(
  porta, () => console.log("Servidor funcionando!")
);