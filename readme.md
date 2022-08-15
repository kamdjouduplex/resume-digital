#  Duplex Kamdjou Digital Resume

A digital resume website built based on the content from my personal REAL [resume](./assets/Kamdjou-Temfack-Duplex-Marie-Resume.pdf) 

View live demo here using github pages: [Live Demo](https://kamdjouduplex.github.io/resume-digital/)

## Dark Mode Preview

<img src="assets\images\dark-mode-preview.jpg">

## Light Mode Preview

<img src="assets\images\light-mode-preview.jpg">

## Switching between color themes

This website has no auto toggle theme switcher, therefor to change themes you must manual go into `/styles/main.css` and the css variables to use either theme. Default is dark, so do the following here:

```css
--mainTextColor:var(--mainTextColor-light); 
--secondaryTextColor:(--secondaryTextColor-light);
--mainLinkColor:var(--mainLinkColor-light);
--mainBorderColor:var(--mainBorderColor-light);
--mainBgColor:var(--mainBgColor-light);
```

### Credit goes to Dennis Ivy 
I build this project based on his [project](https://github.com/divanov11/Digital-Resume)