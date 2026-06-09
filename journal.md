## Journal for Website https://angelkamysz.github.io/website/

### Plan

- Simple yet aesthically pleasing
- colors?
  - I think Ill add some olive green (favorite color)
- Text?
  - What do I want to say?
  - Make it simple for the project
  - Have these items
    - Introduction
      - My name is Angel. Creating this website to practice.
    - About me
      - Background
      - Education
      - Goals
    - Experience (touch on these learned in class)
      - HTML
      - CSS
      - JavaScript
      - Design
      - Accessibilty
    - Add some fun facts?
      - Few fun things about me
      - Retired Veteran
      - Work at Randall Children's
        - Describe some of the things I do there
      - Video game design stuff I have done
      - Websites I have created
    - Contact section
      - Name
      - Email
      - Number
      - what would like to contact me about
      - Leave a message

### Design

- For the design, taking the html layout from an assignment and inputting all the things we learned
  - Have a style.css file of course for all the coloring and layout
  - Javscript Code
    - Form submission for this one
  - Use some bootstrap

### How to run code on github

- I used this video to help me deploy the website onto github
  https://www.youtube.com/watch?v=e5AwNU3Y2es
  But here are the steps.
- Make a new repository.
- Make sure this repository is in Github.
- Make sure that the files are not in a folder but at root of the repository.
  I uploaded my files into and was working from the webdev repository.
- They say to have github desktop. I dont have that but you might.
- Go to your settings then pages and change the source to "github actions"
- We are creating an HTML website so click static HTML to configure.
- Commit the changes as default as we are using the main branch.
- You can check the progress in the Actions tab and it takes a few seconds to deploy.
- THen you can see in your settings that your website is up and running.
- Thats all i did and created the website. I worked on the project through the webdev repositroy and then
  uploaded my files to the website folder.

### Things I did

- Changed all the "cat facts" in js and html so it is redesigned for the "About Me" section
- Removed images and commented out those lines of codes for now. (Images at the end)
- I did add a media-screen for small screens.
- In JS, I mainly changed

```
const fetchCatFacts = async function () {
  const catFactsList = document.getElementById('cat-facts-list');
  catFactsList.replaceChildren();
}
```

to this:

```
const factsAboutMe = [
  'I am studying computer science and building my web development skills.',
  'I enjoy learning how websites, programs, and computer systems work.',
  'I like solving problems step by step, especially when debugging code.',
  'I have experience working with technology, communication, and organization.',
  'I am interested in building projects that show my growth as a developer.',
  'I am a retired Veteran.',
  'I currently work at Randall Childrens hospital where I engineer devices for differently able kiddos.',
  'I also prototype... A LOT.',
];

const loadFactsButton = document.querySelector('.load-personal-facts-button');
```

- The main thing was scrubbing this sample website we did for debugging down to some bare bones
  - Meaning, I got rid of all the containers that were about cats and images and commented out those
    lines for the time being. I then proceeded to change them to whatever section I needed them to be.
  - For instance the code above, I made the cat facts, random facts about me that I think are cool.

- I removed anything that says cat, including `cat-facts-list`, `reload-cat-facts`, and the commented-out image alt text. I also cleaned up the duplicate styles.css and index.js links that were in your `<head>`.

- I then started to change some colors and some layouts.
- I changed the navbar up top and put it on the top left.
  - Personal perfernce I guess?
- I then found some Images that I liked (some real and some stock)
- I really learned about object positioning in the CSS file.
  - Here is a link to the video I watched about it. https://www.youtube.com/results?search_query=object+poistioning+css
- A lot of my photos were centered wrong and so I would try to center the container differently or make it
  smaller or bigger but it just didnt do the trick. I looked up how to do it and thats where object-positioning came in handy where I could
  use it to center it left or right.

- I then ended on changing all of the colorts to more lighter colors and my favorite color olive green.
- I didnt remove the previous colors but added mine to the root.
- At the very end, I looked at WAVE for an accessiblity issues and I had only one:

```
1 Error Multiple form lables
```

I was looking around the page for some time and it took me sometime to find it. I had turn off Styles at the top of the wave to see it.
WAVE is flagging this input:

```
<input
  type="checkbox"
  class="navbar-toggle-trigger"
  id="navbar-toggle-trigger"
/>
```

because it has two labels connected to it:

```
<label
  for="navbar-toggle-trigger"
  aria-label="open navbar list"
>
```

and:

```
<label
  for="navbar-toggle-trigger"
  aria-label="close navbar list"
>
```

That checkbox is being used as a toggle.

Here was my fix for it.
Hiding that checkbox from WAVE/screen readers because it is not a real form of input for the user.
It is just being used for CSS behavior.

Here is the problem:

```
<label
  for="navbar-toggle-trigger"
  class="navbar-toggle-close-button"
  aria-label="close navbar list"
>
  <i class="fa-solid fa-xmark"></i>
</label>
```

I changed it to this:

```
<button
  type="button"
  class="navbar-toggle-close-button"
  id="navbar-toggle-close-button"
  aria-label="close navbar list"
>
  <i class="fa-solid fa-xmark"></i>
</button>
```

Adding in that id= part was the key here.
I also added in this code to js file:

```
const navbarToggle = document.getElementById('navbar-toggle-trigger');
const navbarCloseButton = document.getElementById('navbar-toggle-close-button');

navbarCloseButton.addEventListener('click', () => {
  navbarToggle.checked = false;
});
```

basically what this code is doing is just checking with my html.
Hamburger click = checkbox checked = menu opens
X button click = checkbox unchecked = menu closes. Thats as simple as I can tell you.

But, after double checking. I am now seeing this weird thing happen where github website is showing
me the error but my vs code live server isn't showing any. Here are some photos of proof. 
This photo is my VS Code. As you can see, no errors. ![VS Code error](vs code error.png)

Thank you for reading all of this.

