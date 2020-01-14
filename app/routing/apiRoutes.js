var friends = require("../data/friends");

module.exports = function(app) {
    app.get('/api/friends', function(req,res) {
    res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        const scoreArr = [];
        let bestMatch = 0;
        var userScore = req.body.scores;
        for (var i= 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j])))
            }
            scoreArr.push(parseInt(scoreDiff));
        }
        for (var i = 0; i <scoreArr.length; i++) {
            if(scoreArr[i] <= scoreArr[bestMatch]){
                bestMatch = i;
            }
        }

        let idealFriend = friends[bestMatch];
        res.json(idealFriend);

        console.log(req.body);
        friends.push(req.body)
    });

    // app.post('/api/clear', (req,res) => {
    //     friends.length = [];
    //     res.json({
    //         ok:true
    //     });
    // });
}
