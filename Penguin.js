var classDataPromise = d3.json("classData.json");
    classDataPromise.then (function(student){
            console.log("worked", student)
                                      ;
                                     madeRows(student)
                                      
                                      },
                      function(err){
                    console.log("failed:", err);
    })


var getHGrade = function(student)
                {
                    var Grade = student.homework.map(function(homework)
                                                     {
                    return (homework.grade)
                    })
                    return d3.mean(Grade)
                }
var getQGrade = function(student)
                {
                    var Grade = 
                        student.quizes.map(function(quizes)
                                                     {
                    return (quizes.grade)
                    })
                    return d3.mean(Grade)
                }        
var getTGrade = function(student)
                {
                    var Grade = 
                        student.test.map(function(test)
                                                     {
                    return (test.grade)
                    })
                    return d3.mean(Grade)
                }            
var finalgrade = function(student){return student.final[0].grade*.35}
var finalhw = function(student){return getHGrade(student) *.15 *2} 
var finalq = function(student){return getQGrade(student) *10 *.2}
var finalt = function(student){return getTGrade(student) *.3} 
var finalcourse = function(student){return finalgrade(student)+ finalhw(student)+finalq(student)+finalt(student)}



var madeRows = function(student)
{
    var row = 
        d3.select("table tbody")
    
        .selectAll("tr")
        .data(student)
        .enter()
        .append("tr")
        .classed("row", true)
            .classed("bad", function(s){
                if (finalcourse(s) < 70)
                {
                return true;    
                }
                else {
                    return false;
                }
            })
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
                
                
                
                
                
                
        row.append("td")
            .text(function(student)
                               {
            var getTGrade = function(student)
                {
                    var Grade = 
                        student.test.map(function(test)
                                                     {
                    return (test.grade)
                    })
                    return d3.mean(Grade)
                }
            
             
                {
            var getQGrade = function(student)
                {
                    var Grade = 
                        student.quizes.map(function(quizes)
                                                     {
                    return (quizes.grade)
                    })
                    return d3.mean(Grade)
                }
           
            }
            {
            var getHGrade = function(student)
                {
                    var Grade = student.homework.map(function(homework)
                                                     {
                    return (homework.grade)
                    })
                    return d3.mean(Grade)
                }
         
            }
            
            
            return finalcourse(student)
          


        })
   
    d3.select("#final").on("click", function() 
            { console.log("hey");
    student.sort(function(charA, charB)
            {
    if (finalgrade(charA) == 
                             finalgrade(charB))
            {return 0;}
        else if (finalgrade(charA) < 
                             finalgrade(charB))
        {return 1;}
    else 
        {return -1;}
    
    
});
 d3.select("tbody tr")
    .remove();
    madeRows(student);
    
})
    d3.select("#HW").on("click", function() 
            { console.log("hey");
    student.sort(function(charA, charB)
            {
    if (finalhw(charA) == 
                             finalhw(charB))
            {return 0;}
        else if (finalhw(charA) < 
                             finalhw(charB))
        {return 1;}
    else 
        {return -1;}
    
    
});
 d3.select("tbody tr")
    .remove();
    madeRows(student);
    
})
  d3.select("#quiz").on("click", function() 
            { console.log("hey");
    student.sort(function(charA, charB)
            {
    if (finalq(charA) == 
                             finalq(charB))
            {return 0;}
        else if (finalq(charA) < 
                             finalq(charB))
        {return 1;}
    else 
        {return -1;}
    
    
});
 d3.select("tbody tr")
    .remove();
    madeRows(student);
    
})  
  d3.select("#test").on("click", function() 
            { console.log("hey");
    student.sort(function(charA, charB)
            {
    if (finalt(charA) == 
                             finalt(charB))
            {return 0;}
        else if (finalt(charA) < 
                             finalt(charB))
        {return 1;}
    else 
        {return -1;}
    
    
});
 d3.select("tbody tr")
    .remove();
    madeRows(student);
    
})  
   d3.select("#total").on("click", function() 
            { console.log("hey");
    student.sort(function(charA, charB)
            {
    if (finalcourse(charA) == 
                             finalcourse(charB))
            {return 0;}
        else if (finalcourse(charA) < 
                             finalcourse(charB))
        {return 1;}
    else 
        {return -1;}
    
    
});
 d3.select("tbody tr")
    .remove();
    madeRows(student);
    
}) 
    
    
}







