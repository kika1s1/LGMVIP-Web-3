const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('studEmail')
const imageUrl = document.getElementById('imageUrl')
// const male = document.getElementById('male')
// const female = document.getElementById('female')
const enroll = document.getElementById('enroll')
const clear = document.querySelector('.clear')
const enrolledContainer = document.querySelector('.enrolled-container')

const studentEnrolledList = [];
enroll.addEventListener('click', (e) => {
    e.preventDefault()
    save()
    displayEnrolledStudent(studentEnrolledList)
})

function save() {
    const fullName = firstName.value + " " + lastName.value
    const inputGender = document.querySelector("input[type='radio'][name=gender]:checked").value;

    studentEnrolledList.push({
        name: fullName,
        gender: inputGender,
        email: email.value,
        imageUrl: imageUrl.value
    
    })
    localStorage.setItem('studentsList',  JSON.stringify(studentEnrolledList))



    





}
clear.addEventListener('click', () => {
    firstName.value = ''
    imageUrl.value = ''
    document.querySelector("input[type='radio'][name=gender]:checked").value = ''
    email.value = ''
    lastName.value = ''
    

    
})
function displayEnrolledStudent(studentEnrolledList) {
    let oneStudent;
    if (studentEnrolledList.length === 0) {
        oneStudent = document.createElement('div')

        oneStudent.classList.add('student')
        oneStudent.innerHTML = "<h1>No students enrolled</h1>"
        enrolledContainer.appendChild(oneStudent)



        return 
    }
    enrolledContainer.innerHTML = ''
    const h2 = document.createElement('h2')
    h2.classList.add('students--header')
    h2.innerHTML = 'Enrolled Students'
    enrolledContainer.appendChild(h2)
    studentEnrolledList.forEach(student => {
        const oneStudent = document.createElement('div')

        oneStudent.classList.add('student')

        const info = document.createElement('div')
        info.classList.add('info')
        const h3 = document.createElement('h3')
        h3.classList.add('description--header')
        h3.innerHTML = 'Descriptions'
        info.appendChild(h3)

        const ul = document.createElement('ul')
        ul.classList.add('detials')

        const oneName = document.createElement('li')
        oneName.classList.add('name')

        const spanName = document.createElement('span')
        spanName.setAttribute('id', 'name')
        spanName.innerHTML = student.name
        
        oneName.appendChild(spanName)

        const oneEmail = document.createElement('li')
        oneEmail.classList.add('email')

        const spanEmail = document.createElement('span')
        spanEmail.setAttribute('id', 'email')
        spanEmail.innerHTML = "Email: "+ student.email
        oneEmail.appendChild(spanEmail)

        const oneGender = document.createElement('li')
        oneGender.classList.add('gender')

        const spanGender = document.createElement('span')
        spanGender.setAttribute('id', 'gender')
        spanGender.innerHTML = "Gender: "+ student.gender
        oneGender.appendChild(spanGender)
        ul.appendChild(oneName)
        ul.appendChild(oneEmail)
        ul.appendChild(oneGender)
        info.appendChild(ul)
        

        // photo

        const onePhoto = document.createElement('div')
        onePhoto.classList.add('photo')
        const oneH3 = document.createElement('h3')
        oneH3.classList.add('photo--header')
        oneH3.innerHTML = 'photo'
        const oneImg = document.createElement('img')
        oneImg.classList.add('student--photo')
        oneImg.setAttribute('id', 'photo')
        oneImg.setAttribute('src', student.imageUrl)
        oneImg.setAttribute('alt', 'student-photo')
        onePhoto.appendChild(oneH3)
        onePhoto.appendChild(oneImg)
        oneStudent.appendChild(info)
        oneStudent.appendChild(onePhoto)
        enrolledContainer.appendChild(oneStudent)
        
    });
    
}
displayEnrolledStudent(JSON.parse(localStorage.getItem('studentsList')))

// console.log(JSON.parse(localStorage.getItem('studentsList')))


