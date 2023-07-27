//Arrays, Loops, and Conditional Reps

//Part II: JavaScript Reps
    //Easy Going
        for(let i = 1; i <= 20; i++){
            console.log(i)
        }    

    //Get Even
        for(let i = 0; i <= 200; i++){
            if(i % 2 == 0){
                console.log(i)
            }
        }

    //Fizz Buzz
        for(let i = 1; i <= 100; i++){
            if(i % 5 == 0 && i % 3 == 0){
                console.log('FizzBuzz')
            }else if(i % 5 == 0){
                console.log('Buzz')
            }else if(i % 3 == 0){
                console.log('Fizz')
            }else{
                console.log(i)
            }
        }

    // //Wild Wild Life
    //     //array: [name, species, age, hometown]
    //     const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
    //     const sharky = ["Sharky", "shark", 20, "Left Coast"]
    //     const plantee = ["Plantee", "plant",  5000 , "Mordor"]
    //     const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
    //     const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
    //         //1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
    //             plantee.splice(2, 1, 5001)
    //         //2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
    //             wolfy.pop()
    //             wolfy.push('Gotham City')
    //         //3. Give D'Art a second hometown by adding "Hawkins"
    //             dart.splice(3, 1, 'Upside Down and Hawkins')
    //         //4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
    //             wolfy.shift()
    //             wolfy.unshift('Gameboy')

    // //Yell at the Ninja Turtles
    //     //1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
    //         const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
    //     //2. Use a for of loop(not a typo - try it out! Try a for of loop) to call toUpperCase()on each of them and print out the result.
    //         for(element of ninjaTurtles){
    //             console.log(element.toUpperCase())
    //         }

    // //Methods, Revisited
    //     const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
    //     // Console log: the index of Titanic
    //         const Titanic = (element) => element === 'Titanic'
    //         console.log(favMovies.findIndex(Titanic))
    //     // Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
    //         //1. use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
    //             const newFavMovies = [...favMovies]
    //             newFavMovies.sort()
    //         //2. Use the method pop
    //             favMovies.pop()
    //         //3. push "Guardians of the Galaxy"
    //             favMovies.push('Guardians of the Galaxy')
    //         //4. Reverse the array
    //             favMovies.reverse()
    //         //5. Use the shift method
    //             favMovies.shift()
    //         //6. unshift - what does it return?
    //             favMovies.unshift() //it returns 18 --> the length of the array
    //         //7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
    //             const django = (element) => element === 'Django Unchained'
    //             // console.log(favMovies.findIndex(django)) //index 14
    //             favMovies.splice(14, 1, 'Avatar')
    //         //8. slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
    //             // console.log(favMovies.length) //array length is 18
    //             favMovies.slice(9)
    //         //9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
    //             let lastHalf = favMovies.slice(9)
    //             console.log(lastHalf)
    //         //10. console.log your final results
    //             console.log(favMovies)
    //         //11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
    //             const fast = (element) => element === 'Fast and Furious'
    //             console.log(favMovies.findIndex(fast)) //index -1
    //         //12. Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?