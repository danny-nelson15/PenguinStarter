var classDataPromise = d3.json("classData.json");
    classDataPromise.then (function(student){
            console.log("worked", student)
                                      ;
                                     madeRows(student)
                                      
                                      },
                      function(err){
                    console.log("failed:", err);
    })




var madeRows = function(student)
{
    var row = 
        d3.select("table")
    
        .selectAll("tr")
        .data(student)
        .enter()
        .append("tr")
        .classed("row", true)
        row.append("td")
            .append("img")
            .attr("src", function(student){return "imgs/"+student.picture})
        row.append("td")
        .text(function(student)
             {return (student.final[0].grade)
             })
        row.append("td")
        .text(function(student)
             {
            var getGrade = function(student)
                {
                    var Grade = student.homework.map(function(homework)
                                                     {
                    return (homework.grade)
                    })
                    return d3.mean(Grade)
                }
            return getGrade(student)
        })
        row.append("td")
        .text(function(student)
             {
            var getGrade = function(student)
                {
                    var Grade = 
                        student.quizes.map(function(quizes)
                                                     {
                    return (quizes.grade)
                    })
                    return d3.mean(Grade)
                }
            return getGrade(student)
            })
        row.append("td")
        .text(function(student)
            {
            var getGrade = function(student)
                {
                    var Grade = 
                        student.test.map(function(test)
                                                     {
                    return (test.grade)
                    })
                    return d3.mean(Grade)
                }
            return getGrade(student)
            })
}

function myFunction(){
    document.getElementById("final").style.color = "red";
}
