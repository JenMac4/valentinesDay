const yes = document.querySelector(".yes")
const no = document.querySelector(".no")
const buttonSize = document.querySelector(".yes")
const mudkip = document.querySelector(".mudkip")
const text = document.querySelector(".question-text")




const getButtonSize = getComputedStyle(buttonSize).getPropertyValue('--button-size')

let clickCounter =0;
let imageChecker = false;
const initialSize = parseInt(getButtonSize);
let size = initialSize;

const updateNoButton = async (id) => {
    try {
        const fetchedPhrase = await fetchPhrase(id);
        text.innerHTML = fetchedPhrase.phrase;//okay so needed to chain .phrase here
    } catch (error) {
        console.error('Error updating button text:', error.message);
    }
};

no.addEventListener('click', async () => {

    clickCounter++;

    if(clickCounter > 1){
        size *= 1.5;
        yes.style.width = `${yes.offsetWidth + 20}px`;
        yes.style.height = `${yes.offsetHeight + 20}px`

        if(clickCounter > 4 && clickCounter < 10){

            const currentTextSize = parseFloat(getComputedStyle(yes).fontSize);
            const newTextSize = currentTextSize * 1.2; // You can adjust the multiplier as needed
            yes.style.fontSize = `${newTextSize}px`;
        }
        
        growButton();
    }

    try {
        switch (clickCounter) {
            case 1:
            
                await updateNoButton(1)
            break;
            case 2:
                await updateNoButton(2)
                break;
            case 3:
                await updateNoButton(3)
                break;
            case 4:
                await updateNoButton(4)
                break;
            case 5:
                await updateNoButton(5)
                break;
            case 6:
                await updateNoButton(6)
                break;
            case 7:
                await updateNoButton(7)
                break;
            case 8:
                await updateNoButton(8)
                break;
            case 9:
                await updateNoButton(9)
                break;
            case 10:
                await updateNoButton(10)
                break;
            case 11:
                await updateNoButton(11)
                break;
            case 12:
                await updateNoButton(12)
                break;
            case 13:
                await updateNoButton(13)
                break;
            case 14:
                await updateNoButton(14)
                break;
            case 15:
                await updateNoButton(15)
                break;
            case 16:
                await updateNoButton(16)
                break;
            case 17:
                await updateNoButton(17)
                break;
            case 18:
                await updateNoButton(18)
                break;
            default:
              console.log("no phrase loaded: error");
        }
        
    } catch (error) {
        throw new Error("error")
    }


    changeImage();
    // buttonSize.style.setProperty('--button-size', size)


    
});

const growButton = () => {

}

const changeImage = () => {

    if(imageChecker == false){

        mudkip.style.backgroundImage = "url('mudkipHappy.png')"
        imageChecker = true;
    }
    else {
        mudkip.style.backgroundImage = "url('mudkip.png')"
        imageChecker = false;

    }
}

//SHOULDN'T NEED ASYNC HERE BUT WILL FOR PRACTICE!!

const fetchPhrase = async (id) => {

    const url = 'data.json'

    try{

        const response = await fetch(url);//returns a promise 

        if(!response.ok){
            throw new Error('error')
        }

        const data = await response.json();//parse json from promise
        
        phrase = data.find(item => item.id ===id)

        if(!phrase){
            throw new Error('phrase not found')
        }
        return phrase;
        console.log(phrase)
        // console.log('testing')
    }
    catch(error){
        console.error('error', error.message)
    }

}
console.log(fetchPhrase(3))
// fetchPhrase(3)
// console.log('bastard')

const setButtonText = (yes) => {
    yes.innerHTML =  fetchPhrase()
}

yes.addEventListener('click', () => {
    location.href = "yes.html"
})

// window.addEventListener('beforeunload', (event) => {
//     var confirmationMessage = 'Are you sure you want to leave?';

//   // Standard for most browsers
//   event.returnValue = confirmationMessage;

//   // For modern browsers
//   return confirmationMessage;
//   });

//   window.addEventListener('unload', function () {
//     this.alert('testing')
//   });