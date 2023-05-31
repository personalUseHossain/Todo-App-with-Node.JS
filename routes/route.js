const router = require('express').Router();
const { TODO } = require('../db/db');


router.get('/', async (req, res) => {
    const allTodo = await TODO.find();
    res.render('pages/index', { todo: allTodo });
})

router.post('/', (req, res) => {
    async function createTODO() {
        const newTODO = new TODO({
            todo: req.body.todo,
        })
        const result = await newTODO.save();
        res.redirect('/');
    }
    createTODO();
});
router.get("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const findone = await TODO.findByIdAndDelete({ _id: id });
        res.redirect('/');
    } catch (e) {
        res.send(e);
    }
});





module.exports = router;