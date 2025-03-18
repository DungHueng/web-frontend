let  students=[

    { name: "Trần Trí Dương", scores: { math: 9, english: 8, literature : 7 } },

    { name: "Dương văn Chiến", scores: { math: 3, english: 2, literature : 5} },

    { name: "Bùi Thái Sơn", scores: { math: 9.5, english: 9, literature : 9 } }

   ];
   function Scores(arr) {
    let score=[];
    for (let i = 0; i < arr.length; i++) {
        if((students[i].scores.english+students[i].scores.math+students[i].scores.literature)/3>=8){
            score.push(students[i].name);
        }
        
    }
    console.log("Sinh viên có điểm trung bình 3 môn Toán, Anh, Văn  >= 8 là: " + score);
    
   }
   Scores(students);