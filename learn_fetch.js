const url = "https://api.github.com/users/deepjyotk"


async function getTheUserGithubData(){
    try {
        response = await fetch(url) ;
        jsonValue = await response.json();
        console.log('Json Value is: ', jsonValue) ;
    } catch (error) {
        console.log(error) ;
    }
  

    
}

getTheUserGithubData();