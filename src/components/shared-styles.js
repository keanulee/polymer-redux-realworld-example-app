export const sharedStyles = `
.logo-font{font-family:"Titillium Web",sans-serif;}html{position:relative;min-height:100vh;padding-bottom:100px;}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}body{margin:0;}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;vertical-align:baseline;}audio:not([controls]){display:none;height:0;}[hidden],template{display:none;}a{background-color:transparent;}a:active{outline:0;}a:hover{outline:0;}abbr[title]{border-bottom:1px dotted;}b,strong{font-weight:bold;}dfn{font-style:italic;}h1{font-size:2em;margin:0.67em 0;}mark{background:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sup{top:-0.5em;}sub{bottom:-0.25em;}img{border:0;}svg:not(:root){overflow:hidden;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;}pre{overflow:auto;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0;}button{overflow:visible;}button,select{text-transform:none;}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer;}button[disabled],html input[disabled]{cursor:default;}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}input{line-height:normal;}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0;}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto;}input[type="search"]{-webkit-appearance:textfield;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{border:0;padding:0;}textarea{overflow:auto;}optgroup{font-weight:bold;}table{border-collapse:collapse;border-spacing:0;}td,th{padding:0;}@media print {*,*::before,*::after,*::first-letter,*::first-line{text-shadow:none!important;box-shadow:none!important;}a,a:visited{text-decoration:underline;}abbr[title]::after{content:" (" attr(title) ")";}pre,blockquote{border:1px solid #999;page-break-inside:avoid;}thead{display:table-header-group;}tr,img{page-break-inside:avoid;}p,h2,h3{orphans:3;widows:3;}h2,h3{page-break-after:avoid;}.navbar{display:none;}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important;}.tag{border:1px solid #000;}.table{border-collapse:collapse!important;}.table td,.table th{background-color:#fff!important;}.table-bordered th,.table-bordered td{border:1px solid #ddd!important;}}html{box-sizing:border-box;}*,*::before,*::after{box-sizing:inherit;}@-ms-viewport {
  width: device-width; }

html {
  font-size: 16px;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: transparent; }

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #373a3c;
  background-color: #fff; }

[tabindex="-1"]:focus {
  outline: none !important; }

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem; }

p {
  margin-top: 0;
  margin-bottom: 1rem; }

abbr[title],
abbr[data-original-title] {
  cursor: help;
  border-bottom: 1px dotted #818a91; }

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit; }

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem; }

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0; }

dt {
  font-weight: bold; }

dd {
  margin-bottom: .5rem;
  margin-left: 0; }

blockquote {
  margin: 0 0 1rem; }

a {
  color: #5CB85C;
  text-decoration: none; }
  a:focus, a:hover {
    color: #3d8b3d;
    text-decoration: underline; }
  a:focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px; }

a:not([href]) {
  color: inherit;
  text-decoration: none; }
  a:not([href]):focus, a:not([href]):hover {
    color: inherit;
    text-decoration: none; }
  a:not([href]):focus {
    outline: none; }

pre {
  margin-top: 0;
  margin-bottom: 1rem; }

figure {
  margin: 0 0 1rem; }

img {
  vertical-align: middle; }

[role="button"] {
  cursor: pointer; }

a,
area,
button,
[role="button"],
input,
label,
select,
summary,
textarea {
  touch-action: manipulation; }

table {
  background-color: transparent; }

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #818a91;
  text-align: left;
  caption-side: bottom; }

th {
  text-align: left; }

label {
  display: inline-block;
  margin-bottom: .5rem; }

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color; }

input,
button,
select,
textarea {
  margin: 0;
  line-height: inherit;
  border-radius: 0; }

textarea {
  resize: vertical; }

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0; }

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit; }

input[type="search"] {
  -webkit-appearance: none; }

output {
  display: inline-block; }

[hidden] {
  display: none !important; }

h1, h2, h3, h4, h5, h6,
.h1, .h2, .h3, .h4, .h5, .h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit; }

h1, .h1 {
  font-size: 2.5rem; }

h2, .h2 {
  font-size: 2rem; }

h3, .h3 {
  font-size: 1.75rem; }

h4, .h4 {
  font-size: 1.5rem; }

h5, .h5 {
  font-size: 1.25rem; }

h6, .h6 {
  font-size: 1rem; }

.lead {
  font-size: 1.25rem;
  font-weight: 300; }

.display-1 {
  font-size: 6rem;
  font-weight: 300; }

.display-2 {
  font-size: 5.5rem;
  font-weight: 300; }

.display-3 {
  font-size: 4.5rem;
  font-weight: 300; }

.display-4 {
  font-size: 3.5rem;
  font-weight: 300; }

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1); }

small,
.small {
  font-size: 80%;
  font-weight: normal; }

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3; }

.list-unstyled {
  padding-left: 0;
  list-style: none; }

.list-inline {
  padding-left: 0;
  list-style: none; }

.list-inline-item {
  display: inline-block; }
  .list-inline-item:not(:last-child) {
    margin-right: 5px; }

.initialism {
  font-size: 90%;
  text-transform: uppercase; }

.blockquote {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border-left: 0.25rem solid #eceeef; }

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #818a91; }
  .blockquote-footer::before {
    content: "\\2014 \\00A0"; }

.blockquote-reverse {
  padding-right: 1rem;
  padding-left: 0;
  text-align: right;
  border-right: 0.25rem solid #eceeef;
  border-left: 0; }

.blockquote-reverse .blockquote-footer::before {
  content: ""; }

.blockquote-reverse .blockquote-footer::after {
  content: "\\00A0 \\2014"; }

.img-fluid, .carousel-inner > .carousel-item > img,
.carousel-inner > .carousel-item > a > img {
  display: block;
  max-width: 100%;
  height: auto; }

.img-rounded {
  border-radius: 0.3rem; }

.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  transition: all .2s ease-in-out;
  display: inline-block;
  max-width: 100%;
  height: auto; }

.img-circle {
  border-radius: 50%; }

.figure {
  display: inline-block; }

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1; }

.figure-caption {
  font-size: 90%;
  color: #818a91; }

code,
kbd,
pre,
samp {
  font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }

code {
  padding: 0.2rem 0.4rem;
  font-size: 90%;
  color: #bd4147;
  background-color: #f7f7f9;
  border-radius: 0.25rem; }

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 90%;
  color: #fff;
  background-color: #333;
  border-radius: 0.2rem; }
  kbd kbd {
    padding: 0;
    font-size: 100%;
    font-weight: bold; }

pre {
  display: block;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 90%;
  color: #373a3c; }
  pre code {
    padding: 0;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    border-radius: 0; }

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll; }

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px; }
  @media (min-width: 544px) {
    .container {
      max-width: 576px; } }
  @media (min-width: 768px) {
    .container {
      max-width: 720px; } }
  @media (min-width: 992px) {
    .container {
      max-width: 940px; } }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px; } }

.container-fluid {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px; }

.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px; }

.col-xs {
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px; }

.col-xs-1 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 8.33333%;
  max-width: 8.33333%; }

.col-xs-2 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 16.66667%;
  max-width: 16.66667%; }

.col-xs-3 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 25%; }

.col-xs-4 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 33.33333%;
  max-width: 33.33333%; }

.col-xs-5 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 41.66667%;
  max-width: 41.66667%; }

.col-xs-6 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 50%;
  max-width: 50%; }

.col-xs-7 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 58.33333%;
  max-width: 58.33333%; }

.col-xs-8 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 66.66667%;
  max-width: 66.66667%; }

.col-xs-9 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 75%;
  max-width: 75%; }

.col-xs-10 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 83.33333%;
  max-width: 83.33333%; }

.col-xs-11 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 91.66667%;
  max-width: 91.66667%; }

.col-xs-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%; }

.pull-xs-0 {
  right: auto; }

.pull-xs-1 {
  right: 8.33333%; }

.pull-xs-2 {
  right: 16.66667%; }

.pull-xs-3 {
  right: 25%; }

.pull-xs-4 {
  right: 33.33333%; }

.pull-xs-5 {
  right: 41.66667%; }

.pull-xs-6 {
  right: 50%; }

.pull-xs-7 {
  right: 58.33333%; }

.pull-xs-8 {
  right: 66.66667%; }

.pull-xs-9 {
  right: 75%; }

.pull-xs-10 {
  right: 83.33333%; }

.pull-xs-11 {
  right: 91.66667%; }

.pull-xs-12 {
  right: 100%; }

.push-xs-0 {
  left: auto; }

.push-xs-1 {
  left: 8.33333%; }

.push-xs-2 {
  left: 16.66667%; }

.push-xs-3 {
  left: 25%; }

.push-xs-4 {
  left: 33.33333%; }

.push-xs-5 {
  left: 41.66667%; }

.push-xs-6 {
  left: 50%; }

.push-xs-7 {
  left: 58.33333%; }

.push-xs-8 {
  left: 66.66667%; }

.push-xs-9 {
  left: 75%; }

.push-xs-10 {
  left: 83.33333%; }

.push-xs-11 {
  left: 91.66667%; }

.push-xs-12 {
  left: 100%; }

.offset-xs-1 {
  margin-left: 8.33333%; }

.offset-xs-2 {
  margin-left: 16.66667%; }

.offset-xs-3 {
  margin-left: 25%; }

.offset-xs-4 {
  margin-left: 33.33333%; }

.offset-xs-5 {
  margin-left: 41.66667%; }

.offset-xs-6 {
  margin-left: 50%; }

.offset-xs-7 {
  margin-left: 58.33333%; }

.offset-xs-8 {
  margin-left: 66.66667%; }

.offset-xs-9 {
  margin-left: 75%; }

.offset-xs-10 {
  margin-left: 83.33333%; }

.offset-xs-11 {
  margin-left: 91.66667%; }

@media (min-width: 544px) {
  .col-sm {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px; }
  .col-sm-1 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-sm-2 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-sm-3 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 25%;
    max-width: 25%; }
  .col-sm-4 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-sm-5 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-sm-6 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 50%;
    max-width: 50%; }
  .col-sm-7 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-sm-8 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-sm-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%; }
  .col-sm-10 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-sm-11 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-sm-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%; }
  .pull-sm-0 {
    right: auto; }
  .pull-sm-1 {
    right: 8.33333%; }
  .pull-sm-2 {
    right: 16.66667%; }
  .pull-sm-3 {
    right: 25%; }
  .pull-sm-4 {
    right: 33.33333%; }
  .pull-sm-5 {
    right: 41.66667%; }
  .pull-sm-6 {
    right: 50%; }
  .pull-sm-7 {
    right: 58.33333%; }
  .pull-sm-8 {
    right: 66.66667%; }
  .pull-sm-9 {
    right: 75%; }
  .pull-sm-10 {
    right: 83.33333%; }
  .pull-sm-11 {
    right: 91.66667%; }
  .pull-sm-12 {
    right: 100%; }
  .push-sm-0 {
    left: auto; }
  .push-sm-1 {
    left: 8.33333%; }
  .push-sm-2 {
    left: 16.66667%; }
  .push-sm-3 {
    left: 25%; }
  .push-sm-4 {
    left: 33.33333%; }
  .push-sm-5 {
    left: 41.66667%; }
  .push-sm-6 {
    left: 50%; }
  .push-sm-7 {
    left: 58.33333%; }
  .push-sm-8 {
    left: 66.66667%; }
  .push-sm-9 {
    left: 75%; }
  .push-sm-10 {
    left: 83.33333%; }
  .push-sm-11 {
    left: 91.66667%; }
  .push-sm-12 {
    left: 100%; }
  .offset-sm-0 {
    margin-left: 0%; }
  .offset-sm-1 {
    margin-left: 8.33333%; }
  .offset-sm-2 {
    margin-left: 16.66667%; }
  .offset-sm-3 {
    margin-left: 25%; }
  .offset-sm-4 {
    margin-left: 33.33333%; }
  .offset-sm-5 {
    margin-left: 41.66667%; }
  .offset-sm-6 {
    margin-left: 50%; }
  .offset-sm-7 {
    margin-left: 58.33333%; }
  .offset-sm-8 {
    margin-left: 66.66667%; }
  .offset-sm-9 {
    margin-left: 75%; }
  .offset-sm-10 {
    margin-left: 83.33333%; }
  .offset-sm-11 {
    margin-left: 91.66667%; } }

@media (min-width: 768px) {
  .col-md {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px; }
  .col-md-1 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-md-2 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-md-3 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 25%;
    max-width: 25%; }
  .col-md-4 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-md-5 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-md-6 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 50%;
    max-width: 50%; }
  .col-md-7 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-md-8 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-md-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%; }
  .col-md-10 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-md-11 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-md-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%; }
  .pull-md-0 {
    right: auto; }
  .pull-md-1 {
    right: 8.33333%; }
  .pull-md-2 {
    right: 16.66667%; }
  .pull-md-3 {
    right: 25%; }
  .pull-md-4 {
    right: 33.33333%; }
  .pull-md-5 {
    right: 41.66667%; }
  .pull-md-6 {
    right: 50%; }
  .pull-md-7 {
    right: 58.33333%; }
  .pull-md-8 {
    right: 66.66667%; }
  .pull-md-9 {
    right: 75%; }
  .pull-md-10 {
    right: 83.33333%; }
  .pull-md-11 {
    right: 91.66667%; }
  .pull-md-12 {
    right: 100%; }
  .push-md-0 {
    left: auto; }
  .push-md-1 {
    left: 8.33333%; }
  .push-md-2 {
    left: 16.66667%; }
  .push-md-3 {
    left: 25%; }
  .push-md-4 {
    left: 33.33333%; }
  .push-md-5 {
    left: 41.66667%; }
  .push-md-6 {
    left: 50%; }
  .push-md-7 {
    left: 58.33333%; }
  .push-md-8 {
    left: 66.66667%; }
  .push-md-9 {
    left: 75%; }
  .push-md-10 {
    left: 83.33333%; }
  .push-md-11 {
    left: 91.66667%; }
  .push-md-12 {
    left: 100%; }
  .offset-md-0 {
    margin-left: 0%; }
  .offset-md-1 {
    margin-left: 8.33333%; }
  .offset-md-2 {
    margin-left: 16.66667%; }
  .offset-md-3 {
    margin-left: 25%; }
  .offset-md-4 {
    margin-left: 33.33333%; }
  .offset-md-5 {
    margin-left: 41.66667%; }
  .offset-md-6 {
    margin-left: 50%; }
  .offset-md-7 {
    margin-left: 58.33333%; }
  .offset-md-8 {
    margin-left: 66.66667%; }
  .offset-md-9 {
    margin-left: 75%; }
  .offset-md-10 {
    margin-left: 83.33333%; }
  .offset-md-11 {
    margin-left: 91.66667%; } }

@media (min-width: 992px) {
  .col-lg {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px; }
  .col-lg-1 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-lg-2 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-lg-3 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 25%;
    max-width: 25%; }
  .col-lg-4 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-lg-5 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-lg-6 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 50%;
    max-width: 50%; }
  .col-lg-7 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-lg-8 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-lg-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%; }
  .col-lg-10 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-lg-11 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-lg-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%; }
  .pull-lg-0 {
    right: auto; }
  .pull-lg-1 {
    right: 8.33333%; }
  .pull-lg-2 {
    right: 16.66667%; }
  .pull-lg-3 {
    right: 25%; }
  .pull-lg-4 {
    right: 33.33333%; }
  .pull-lg-5 {
    right: 41.66667%; }
  .pull-lg-6 {
    right: 50%; }
  .pull-lg-7 {
    right: 58.33333%; }
  .pull-lg-8 {
    right: 66.66667%; }
  .pull-lg-9 {
    right: 75%; }
  .pull-lg-10 {
    right: 83.33333%; }
  .pull-lg-11 {
    right: 91.66667%; }
  .pull-lg-12 {
    right: 100%; }
  .push-lg-0 {
    left: auto; }
  .push-lg-1 {
    left: 8.33333%; }
  .push-lg-2 {
    left: 16.66667%; }
  .push-lg-3 {
    left: 25%; }
  .push-lg-4 {
    left: 33.33333%; }
  .push-lg-5 {
    left: 41.66667%; }
  .push-lg-6 {
    left: 50%; }
  .push-lg-7 {
    left: 58.33333%; }
  .push-lg-8 {
    left: 66.66667%; }
  .push-lg-9 {
    left: 75%; }
  .push-lg-10 {
    left: 83.33333%; }
  .push-lg-11 {
    left: 91.66667%; }
  .push-lg-12 {
    left: 100%; }
  .offset-lg-0 {
    margin-left: 0%; }
  .offset-lg-1 {
    margin-left: 8.33333%; }
  .offset-lg-2 {
    margin-left: 16.66667%; }
  .offset-lg-3 {
    margin-left: 25%; }
  .offset-lg-4 {
    margin-left: 33.33333%; }
  .offset-lg-5 {
    margin-left: 41.66667%; }
  .offset-lg-6 {
    margin-left: 50%; }
  .offset-lg-7 {
    margin-left: 58.33333%; }
  .offset-lg-8 {
    margin-left: 66.66667%; }
  .offset-lg-9 {
    margin-left: 75%; }
  .offset-lg-10 {
    margin-left: 83.33333%; }
  .offset-lg-11 {
    margin-left: 91.66667%; } }

@media (min-width: 1200px) {
  .col-xl {
    position: relative;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px; }
  .col-xl-1 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 8.33333%;
    max-width: 8.33333%; }
  .col-xl-2 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 16.66667%;
    max-width: 16.66667%; }
  .col-xl-3 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 25%;
    max-width: 25%; }
  .col-xl-4 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 33.33333%;
    max-width: 33.33333%; }
  .col-xl-5 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 41.66667%;
    max-width: 41.66667%; }
  .col-xl-6 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 50%;
    max-width: 50%; }
  .col-xl-7 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 58.33333%;
    max-width: 58.33333%; }
  .col-xl-8 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 66.66667%;
    max-width: 66.66667%; }
  .col-xl-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 75%;
    max-width: 75%; }
  .col-xl-10 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 83.33333%;
    max-width: 83.33333%; }
  .col-xl-11 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 91.66667%;
    max-width: 91.66667%; }
  .col-xl-12 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 100%;
    max-width: 100%; }
  .pull-xl-0 {
    right: auto; }
  .pull-xl-1 {
    right: 8.33333%; }
  .pull-xl-2 {
    right: 16.66667%; }
  .pull-xl-3 {
    right: 25%; }
  .pull-xl-4 {
    right: 33.33333%; }
  .pull-xl-5 {
    right: 41.66667%; }
  .pull-xl-6 {
    right: 50%; }
  .pull-xl-7 {
    right: 58.33333%; }
  .pull-xl-8 {
    right: 66.66667%; }
  .pull-xl-9 {
    right: 75%; }
  .pull-xl-10 {
    right: 83.33333%; }
  .pull-xl-11 {
    right: 91.66667%; }
  .pull-xl-12 {
    right: 100%; }
  .push-xl-0 {
    left: auto; }
  .push-xl-1 {
    left: 8.33333%; }
  .push-xl-2 {
    left: 16.66667%; }
  .push-xl-3 {
    left: 25%; }
  .push-xl-4 {
    left: 33.33333%; }
  .push-xl-5 {
    left: 41.66667%; }
  .push-xl-6 {
    left: 50%; }
  .push-xl-7 {
    left: 58.33333%; }
  .push-xl-8 {
    left: 66.66667%; }
  .push-xl-9 {
    left: 75%; }
  .push-xl-10 {
    left: 83.33333%; }
  .push-xl-11 {
    left: 91.66667%; }
  .push-xl-12 {
    left: 100%; }
  .offset-xl-0 {
    margin-left: 0%; }
  .offset-xl-1 {
    margin-left: 8.33333%; }
  .offset-xl-2 {
    margin-left: 16.66667%; }
  .offset-xl-3 {
    margin-left: 25%; }
  .offset-xl-4 {
    margin-left: 33.33333%; }
  .offset-xl-5 {
    margin-left: 41.66667%; }
  .offset-xl-6 {
    margin-left: 50%; }
  .offset-xl-7 {
    margin-left: 58.33333%; }
  .offset-xl-8 {
    margin-left: 66.66667%; }
  .offset-xl-9 {
    margin-left: 75%; }
  .offset-xl-10 {
    margin-left: 83.33333%; }
  .offset-xl-11 {
    margin-left: 91.66667%; } }

.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem; }
  .table th,
  .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #eceeef; }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #eceeef; }
  .table tbody + tbody {
    border-top: 2px solid #eceeef; }
  .table .table {
    background-color: #fff; }

.table-sm th,
.table-sm td {
  padding: 0.3rem; }

.table-bordered {
  border: 1px solid #eceeef; }
  .table-bordered th,
  .table-bordered td {
    border: 1px solid #eceeef; }
  .table-bordered thead th,
  .table-bordered thead td {
    border-bottom-width: 2px; }

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f9f9f9; }

.table-hover tbody tr:hover {
  background-color: #f5f5f5; }

.table-active,
.table-active > th,
.table-active > td {
  background-color: #f5f5f5; }

.table-hover .table-active:hover {
  background-color: #e8e8e8; }
  .table-hover .table-active:hover > td,
  .table-hover .table-active:hover > th {
    background-color: #e8e8e8; }

.table-success,
.table-success > th,
.table-success > td {
  background-color: #dff0d8; }

.table-hover .table-success:hover {
  background-color: #d0e9c6; }
  .table-hover .table-success:hover > td,
  .table-hover .table-success:hover > th {
    background-color: #d0e9c6; }

.table-info,
.table-info > th,
.table-info > td {
  background-color: #d9edf7; }

.table-hover .table-info:hover {
  background-color: #c4e3f3; }
  .table-hover .table-info:hover > td,
  .table-hover .table-info:hover > th {
    background-color: #c4e3f3; }

.table-warning,
.table-warning > th,
.table-warning > td {
  background-color: #fcf8e3; }

.table-hover .table-warning:hover {
  background-color: #faf2cc; }
  .table-hover .table-warning:hover > td,
  .table-hover .table-warning:hover > th {
    background-color: #faf2cc; }

.table-danger,
.table-danger > th,
.table-danger > td {
  background-color: #f2dede; }

.table-hover .table-danger:hover {
  background-color: #ebcccc; }
  .table-hover .table-danger:hover > td,
  .table-hover .table-danger:hover > th {
    background-color: #ebcccc; }

.table-responsive {
  display: block;
  width: 100%;
  min-height: .01%;
  overflow-x: auto; }

.thead-inverse th {
  color: #fff;
  background-color: #373a3c; }

.thead-default th {
  color: #55595c;
  background-color: #eceeef; }

.table-inverse {
  color: #eceeef;
  background-color: #373a3c; }
  .table-inverse.table-bordered {
    border: 0; }
  .table-inverse th,
  .table-inverse td,
  .table-inverse thead th {
    border-color: #55595c; }

.table-reflow thead {
  float: left; }

.table-reflow tbody {
  display: block;
  white-space: nowrap; }

.table-reflow th,
.table-reflow td {
  border-top: 1px solid #eceeef;
  border-left: 1px solid #eceeef; }
  .table-reflow th:last-child,
  .table-reflow td:last-child {
    border-right: 1px solid #eceeef; }

.table-reflow thead:last-child tr:last-child th,
.table-reflow thead:last-child tr:last-child td,
.table-reflow tbody:last-child tr:last-child th,
.table-reflow tbody:last-child tr:last-child td,
.table-reflow tfoot:last-child tr:last-child th,
.table-reflow tfoot:last-child tr:last-child td {
  border-bottom: 1px solid #eceeef; }

.table-reflow tr {
  float: left; }
  .table-reflow tr th,
  .table-reflow tr td {
    display: block !important;
    border: 1px solid #eceeef; }

.form-control {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem; }
  .form-control::-ms-expand {
    background-color: transparent;
    border: 0; }
  .form-control:focus {
    border-color: #66afe9;
    outline: none; }
  .form-control::placeholder {
    color: #999;
    opacity: 1; }
  .form-control:disabled, .form-control[readonly] {
    background-color: #eceeef;
    opacity: 1; }
  .form-control:disabled {
    cursor: not-allowed; }

select.form-control:not([size]):not([multiple]) {
  height: 2.5rem; }

.form-control-file,
.form-control-range {
  display: block; }

.form-control-label {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0; }

.form-control-legend {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem; }

_::-webkit-full-page-media.form-control,
input[type="date"].form-control,
input[type="time"].form-control,
input[type="datetime-local"].form-control,
input[type="month"].form-control {
  line-height: 2.5rem; }

_::-webkit-full-page-media.input-sm,
.input-group-sm _::-webkit-full-page-media.form-control,
input[type="date"].input-sm,
.input-group-sm
input[type="date"].form-control,
input[type="time"].input-sm,
.input-group-sm
input[type="time"].form-control,
input[type="datetime-local"].input-sm,
.input-group-sm
input[type="datetime-local"].form-control,
input[type="month"].input-sm,
.input-group-sm
input[type="month"].form-control {
  line-height: 1.8125rem; }

_::-webkit-full-page-media.input-lg,
.input-group-lg _::-webkit-full-page-media.form-control,
input[type="date"].input-lg,
.input-group-lg
input[type="date"].form-control,
input[type="time"].input-lg,
.input-group-lg
input[type="time"].form-control,
input[type="datetime-local"].input-lg,
.input-group-lg
input[type="datetime-local"].form-control,
input[type="month"].input-lg,
.input-group-lg
input[type="month"].form-control {
  line-height: 3.16667rem; }

.form-control-static {
  min-height: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0; }
  .form-control-static.form-control-sm, .input-group-sm > .form-control-static.form-control,
  .input-group-sm > .form-control-static.input-group-addon,
  .input-group-sm > .input-group-btn > .form-control-static.btn, .form-control-static.form-control-lg, .input-group-lg > .form-control-static.form-control,
  .input-group-lg > .form-control-static.input-group-addon,
  .input-group-lg > .input-group-btn > .form-control-static.btn {
    padding-right: 0;
    padding-left: 0; }

.form-control-sm, .input-group-sm > .form-control,
.input-group-sm > .input-group-addon,
.input-group-sm > .input-group-btn > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem; }

.form-control-lg, .input-group-lg > .form-control,
.input-group-lg > .input-group-addon,
.input-group-lg > .input-group-btn > .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem; }

.form-group {
  margin-bottom: 1rem; }

.radio,
.checkbox {
  position: relative;
  display: block;
  margin-bottom: 0.75rem; }
  .radio label,
  .checkbox label {
    padding-left: 1.25rem;
    margin-bottom: 0;
    cursor: pointer; }
    .radio label input:only-child,
    .checkbox label input:only-child {
      position: static; }

.radio input[type="radio"],
.radio-inline input[type="radio"],
.checkbox input[type="checkbox"],
.checkbox-inline input[type="checkbox"] {
  position: absolute;
  margin-top: .25rem;
  margin-left: -1.25rem; }

.radio + .radio,
.checkbox + .checkbox {
  margin-top: -.25rem; }

.radio-inline,
.checkbox-inline {
  position: relative;
  display: inline-block;
  padding-left: 1.25rem;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: pointer; }

.radio-inline + .radio-inline,
.checkbox-inline + .checkbox-inline {
  margin-top: 0;
  margin-left: .75rem; }

input[type="radio"]:disabled, input[type="radio"].disabled,
input[type="checkbox"]:disabled,
input[type="checkbox"].disabled {
  cursor: not-allowed; }

.radio-inline.disabled,
.checkbox-inline.disabled {
  cursor: not-allowed; }

.radio.disabled label,
.checkbox.disabled label {
  cursor: not-allowed; }

.form-control-success,
.form-control-warning,
.form-control-danger {
  padding-right: 2.25rem;
  background-repeat: no-repeat;
  background-position: center right 0.625rem;
  background-size: 1.25rem 1.25rem; }

.has-success .text-help,
.has-success .form-control-label,
.has-success .radio,
.has-success .checkbox,
.has-success .radio-inline,
.has-success .checkbox-inline,
.has-success.radio label,
.has-success.checkbox label,
.has-success.radio-inline label,
.has-success.checkbox-inline label,
.has-success .custom-control {
  color: #5cb85c; }

.has-success .form-control {
  border-color: #5cb85c; }

.has-success .input-group-addon {
  color: #5cb85c;
  border-color: #5cb85c;
  background-color: #eaf6ea; }

.has-success .form-control-feedback {
  color: #5cb85c; }

.has-success .form-control-success {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E"); }

.has-warning .text-help,
.has-warning .form-control-label,
.has-warning .radio,
.has-warning .checkbox,
.has-warning .radio-inline,
.has-warning .checkbox-inline,
.has-warning.radio label,
.has-warning.checkbox label,
.has-warning.radio-inline label,
.has-warning.checkbox-inline label,
.has-warning .custom-control {
  color: #f0ad4e; }

.has-warning .form-control {
  border-color: #f0ad4e; }

.has-warning .input-group-addon {
  color: #f0ad4e;
  border-color: #f0ad4e;
  background-color: white; }

.has-warning .form-control-feedback {
  color: #f0ad4e; }

.has-warning .form-control-warning {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E"); }

.has-danger .text-help,
.has-danger .form-control-label,
.has-danger .radio,
.has-danger .checkbox,
.has-danger .radio-inline,
.has-danger .checkbox-inline,
.has-danger.radio label,
.has-danger.checkbox label,
.has-danger.radio-inline label,
.has-danger.checkbox-inline label,
.has-danger .custom-control {
  color: #B85C5C; }

.has-danger .form-control {
  border-color: #B85C5C; }

.has-danger .input-group-addon {
  color: #B85C5C;
  border-color: #B85C5C;
  background-color: #f6eaea; }

.has-danger .form-control-feedback {
  color: #B85C5C; }

.has-danger .form-control-danger {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E"); }

@media (min-width: 544px) {
  .form-inline .form-group {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle; }
  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle; }
  .form-inline .form-control-static {
    display: inline-block; }
  .form-inline .input-group {
    display: inline-table;
    vertical-align: middle; }
    .form-inline .input-group .input-group-addon,
    .form-inline .input-group .input-group-btn,
    .form-inline .input-group .form-control {
      width: auto; }
  .form-inline .input-group > .form-control {
    width: 100%; }
  .form-inline .form-control-label {
    margin-bottom: 0;
    vertical-align: middle; }
  .form-inline .radio,
  .form-inline .checkbox {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    vertical-align: middle; }
    .form-inline .radio label,
    .form-inline .checkbox label {
      padding-left: 0; }
  .form-inline .radio input[type="radio"],
  .form-inline .checkbox input[type="checkbox"] {
    position: relative;
    margin-left: 0; }
  .form-inline .has-feedback .form-control-feedback {
    top: 0; } }

.btn {
  display: inline-block;
  font-weight: normal;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem; }
  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {
    outline: thin dotted;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px; }
  .btn:focus, .btn:hover {
    text-decoration: none; }
  .btn.focus {
    text-decoration: none; }
  .btn:active, .btn.active {
    background-image: none;
    outline: 0; }
  .btn.disabled, .btn:disabled {
    cursor: not-allowed;
    opacity: .65; }

a.btn.disabled,
fieldset[disabled] a.btn {
  pointer-events: none; }

.btn-primary {
  color: #fff;
  background-color: #5CB85C;
  border-color: #5CB85C; }
  .btn-primary:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #419641; }
  .btn-primary:focus, .btn-primary.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #419641; }
  .btn-primary:active, .btn-primary.active,
  .open > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #449d44;
    border-color: #419641;
    background-image: none; }
    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,
    .open > .btn-primary.dropdown-toggle:hover,
    .open > .btn-primary.dropdown-toggle:focus,
    .open > .btn-primary.dropdown-toggle.focus {
      color: #fff;
      background-color: #398439;
      border-color: #2d672d; }
  .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary:disabled:focus, .btn-primary:disabled.focus {
    background-color: #5CB85C;
    border-color: #5CB85C; }
  .btn-primary.disabled:hover, .btn-primary:disabled:hover {
    background-color: #5CB85C;
    border-color: #5CB85C; }

.btn-secondary {
  color: #373a3c;
  background-color: #fff;
  border-color: #ccc; }
  .btn-secondary:hover {
    color: #373a3c;
    background-color: #e6e6e6;
    border-color: #adadad; }
  .btn-secondary:focus, .btn-secondary.focus {
    color: #373a3c;
    background-color: #e6e6e6;
    border-color: #adadad; }
  .btn-secondary:active, .btn-secondary.active,
  .open > .btn-secondary.dropdown-toggle {
    color: #373a3c;
    background-color: #e6e6e6;
    border-color: #adadad;
    background-image: none; }
    .btn-secondary:active:hover, .btn-secondary:active:focus, .btn-secondary:active.focus, .btn-secondary.active:hover, .btn-secondary.active:focus, .btn-secondary.active.focus,
    .open > .btn-secondary.dropdown-toggle:hover,
    .open > .btn-secondary.dropdown-toggle:focus,
    .open > .btn-secondary.dropdown-toggle.focus {
      color: #373a3c;
      background-color: #d4d4d4;
      border-color: #8c8c8c; }
  .btn-secondary.disabled:focus, .btn-secondary.disabled.focus, .btn-secondary:disabled:focus, .btn-secondary:disabled.focus {
    background-color: #fff;
    border-color: #ccc; }
  .btn-secondary.disabled:hover, .btn-secondary:disabled:hover {
    background-color: #fff;
    border-color: #ccc; }

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #5bc0de; }
  .btn-info:hover {
    color: #fff;
    background-color: #31b0d5;
    border-color: #2aabd2; }
  .btn-info:focus, .btn-info.focus {
    color: #fff;
    background-color: #31b0d5;
    border-color: #2aabd2; }
  .btn-info:active, .btn-info.active,
  .open > .btn-info.dropdown-toggle {
    color: #fff;
    background-color: #31b0d5;
    border-color: #2aabd2;
    background-image: none; }
    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,
    .open > .btn-info.dropdown-toggle:hover,
    .open > .btn-info.dropdown-toggle:focus,
    .open > .btn-info.dropdown-toggle.focus {
      color: #fff;
      background-color: #269abc;
      border-color: #1f7e9a; }
  .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info:disabled:focus, .btn-info:disabled.focus {
    background-color: #5bc0de;
    border-color: #5bc0de; }
  .btn-info.disabled:hover, .btn-info:disabled:hover {
    background-color: #5bc0de;
    border-color: #5bc0de; }

.btn-success {
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c; }
  .btn-success:hover {
    color: #fff;
    background-color: #449d44;
    border-color: #419641; }
  .btn-success:focus, .btn-success.focus {
    color: #fff;
    background-color: #449d44;
    border-color: #419641; }
  .btn-success:active, .btn-success.active,
  .open > .btn-success.dropdown-toggle {
    color: #fff;
    background-color: #449d44;
    border-color: #419641;
    background-image: none; }
    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,
    .open > .btn-success.dropdown-toggle:hover,
    .open > .btn-success.dropdown-toggle:focus,
    .open > .btn-success.dropdown-toggle.focus {
      color: #fff;
      background-color: #398439;
      border-color: #2d672d; }
  .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success:disabled:focus, .btn-success:disabled.focus {
    background-color: #5cb85c;
    border-color: #5cb85c; }
  .btn-success.disabled:hover, .btn-success:disabled:hover {
    background-color: #5cb85c;
    border-color: #5cb85c; }

.btn-warning {
  color: #fff;
  background-color: #f0ad4e;
  border-color: #f0ad4e; }
  .btn-warning:hover {
    color: #fff;
    background-color: #ec971f;
    border-color: #eb9316; }
  .btn-warning:focus, .btn-warning.focus {
    color: #fff;
    background-color: #ec971f;
    border-color: #eb9316; }
  .btn-warning:active, .btn-warning.active,
  .open > .btn-warning.dropdown-toggle {
    color: #fff;
    background-color: #ec971f;
    border-color: #eb9316;
    background-image: none; }
    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,
    .open > .btn-warning.dropdown-toggle:hover,
    .open > .btn-warning.dropdown-toggle:focus,
    .open > .btn-warning.dropdown-toggle.focus {
      color: #fff;
      background-color: #d58512;
      border-color: #b06d0f; }
  .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning:disabled:focus, .btn-warning:disabled.focus {
    background-color: #f0ad4e;
    border-color: #f0ad4e; }
  .btn-warning.disabled:hover, .btn-warning:disabled:hover {
    background-color: #f0ad4e;
    border-color: #f0ad4e; }

.btn-danger {
  color: #fff;
  background-color: #B85C5C;
  border-color: #B85C5C; }
  .btn-danger:hover {
    color: #fff;
    background-color: #9d4444;
    border-color: #964141; }
  .btn-danger:focus, .btn-danger.focus {
    color: #fff;
    background-color: #9d4444;
    border-color: #964141; }
  .btn-danger:active, .btn-danger.active,
  .open > .btn-danger.dropdown-toggle {
    color: #fff;
    background-color: #9d4444;
    border-color: #964141;
    background-image: none; }
    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,
    .open > .btn-danger.dropdown-toggle:hover,
    .open > .btn-danger.dropdown-toggle:focus,
    .open > .btn-danger.dropdown-toggle.focus {
      color: #fff;
      background-color: #843939;
      border-color: #672d2d; }
  .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger:disabled:focus, .btn-danger:disabled.focus {
    background-color: #B85C5C;
    border-color: #B85C5C; }
  .btn-danger.disabled:hover, .btn-danger:disabled:hover {
    background-color: #B85C5C;
    border-color: #B85C5C; }

.btn-outline-primary {
  color: #5CB85C;
  background-image: none;
  background-color: transparent;
  border-color: #5CB85C; }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #5CB85C;
    border-color: #5CB85C; }
  .btn-outline-primary:focus, .btn-outline-primary.focus {
    color: #fff;
    background-color: #5CB85C;
    border-color: #5CB85C; }
  .btn-outline-primary:active, .btn-outline-primary.active,
  .open > .btn-outline-primary.dropdown-toggle {
    color: #fff;
    background-color: #5CB85C;
    border-color: #5CB85C; }
    .btn-outline-primary:active:hover, .btn-outline-primary:active:focus, .btn-outline-primary:active.focus, .btn-outline-primary.active:hover, .btn-outline-primary.active:focus, .btn-outline-primary.active.focus,
    .open > .btn-outline-primary.dropdown-toggle:hover,
    .open > .btn-outline-primary.dropdown-toggle:focus,
    .open > .btn-outline-primary.dropdown-toggle.focus {
      color: #fff;
      background-color: #398439;
      border-color: #2d672d; }
  .btn-outline-primary.disabled:focus, .btn-outline-primary.disabled.focus, .btn-outline-primary:disabled:focus, .btn-outline-primary:disabled.focus {
    border-color: #a3d7a3; }
  .btn-outline-primary.disabled:hover, .btn-outline-primary:disabled:hover {
    border-color: #a3d7a3; }

.btn-outline-secondary {
  color: #ccc;
  background-image: none;
  background-color: transparent;
  border-color: #ccc; }
  .btn-outline-secondary:hover {
    color: #fff;
    background-color: #ccc;
    border-color: #ccc; }
  .btn-outline-secondary:focus, .btn-outline-secondary.focus {
    color: #fff;
    background-color: #ccc;
    border-color: #ccc; }
  .btn-outline-secondary:active, .btn-outline-secondary.active,
  .open > .btn-outline-secondary.dropdown-toggle {
    color: #fff;
    background-color: #ccc;
    border-color: #ccc; }
    .btn-outline-secondary:active:hover, .btn-outline-secondary:active:focus, .btn-outline-secondary:active.focus, .btn-outline-secondary.active:hover, .btn-outline-secondary.active:focus, .btn-outline-secondary.active.focus,
    .open > .btn-outline-secondary.dropdown-toggle:hover,
    .open > .btn-outline-secondary.dropdown-toggle:focus,
    .open > .btn-outline-secondary.dropdown-toggle.focus {
      color: #fff;
      background-color: #a1a1a1;
      border-color: #8c8c8c; }
  .btn-outline-secondary.disabled:focus, .btn-outline-secondary.disabled.focus, .btn-outline-secondary:disabled:focus, .btn-outline-secondary:disabled.focus {
    border-color: white; }
  .btn-outline-secondary.disabled:hover, .btn-outline-secondary:disabled:hover {
    border-color: white; }

.btn-outline-info {
  color: #5bc0de;
  background-image: none;
  background-color: transparent;
  border-color: #5bc0de; }
  .btn-outline-info:hover {
    color: #fff;
    background-color: #5bc0de;
    border-color: #5bc0de; }
  .btn-outline-info:focus, .btn-outline-info.focus {
    color: #fff;
    background-color: #5bc0de;
    border-color: #5bc0de; }
  .btn-outline-info:active, .btn-outline-info.active,
  .open > .btn-outline-info.dropdown-toggle {
    color: #fff;
    background-color: #5bc0de;
    border-color: #5bc0de; }
    .btn-outline-info:active:hover, .btn-outline-info:active:focus, .btn-outline-info:active.focus, .btn-outline-info.active:hover, .btn-outline-info.active:focus, .btn-outline-info.active.focus,
    .open > .btn-outline-info.dropdown-toggle:hover,
    .open > .btn-outline-info.dropdown-toggle:focus,
    .open > .btn-outline-info.dropdown-toggle.focus {
      color: #fff;
      background-color: #269abc;
      border-color: #1f7e9a; }
  .btn-outline-info.disabled:focus, .btn-outline-info.disabled.focus, .btn-outline-info:disabled:focus, .btn-outline-info:disabled.focus {
    border-color: #b0e1ef; }
  .btn-outline-info.disabled:hover, .btn-outline-info:disabled:hover {
    border-color: #b0e1ef; }

.btn-outline-success {
  color: #5cb85c;
  background-image: none;
  background-color: transparent;
  border-color: #5cb85c; }
  .btn-outline-success:hover {
    color: #fff;
    background-color: #5cb85c;
    border-color: #5cb85c; }
  .btn-outline-success:focus, .btn-outline-success.focus {
    color: #fff;
    background-color: #5cb85c;
    border-color: #5cb85c; }
  .btn-outline-success:active, .btn-outline-success.active,
  .open > .btn-outline-success.dropdown-toggle {
    color: #fff;
    background-color: #5cb85c;
    border-color: #5cb85c; }
    .btn-outline-success:active:hover, .btn-outline-success:active:focus, .btn-outline-success:active.focus, .btn-outline-success.active:hover, .btn-outline-success.active:focus, .btn-outline-success.active.focus,
    .open > .btn-outline-success.dropdown-toggle:hover,
    .open > .btn-outline-success.dropdown-toggle:focus,
    .open > .btn-outline-success.dropdown-toggle.focus {
      color: #fff;
      background-color: #398439;
      border-color: #2d672d; }
  .btn-outline-success.disabled:focus, .btn-outline-success.disabled.focus, .btn-outline-success:disabled:focus, .btn-outline-success:disabled.focus {
    border-color: #a3d7a3; }
  .btn-outline-success.disabled:hover, .btn-outline-success:disabled:hover {
    border-color: #a3d7a3; }

.btn-outline-warning {
  color: #f0ad4e;
  background-image: none;
  background-color: transparent;
  border-color: #f0ad4e; }
  .btn-outline-warning:hover {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e; }
  .btn-outline-warning:focus, .btn-outline-warning.focus {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e; }
  .btn-outline-warning:active, .btn-outline-warning.active,
  .open > .btn-outline-warning.dropdown-toggle {
    color: #fff;
    background-color: #f0ad4e;
    border-color: #f0ad4e; }
    .btn-outline-warning:active:hover, .btn-outline-warning:active:focus, .btn-outline-warning:active.focus, .btn-outline-warning.active:hover, .btn-outline-warning.active:focus, .btn-outline-warning.active.focus,
    .open > .btn-outline-warning.dropdown-toggle:hover,
    .open > .btn-outline-warning.dropdown-toggle:focus,
    .open > .btn-outline-warning.dropdown-toggle.focus {
      color: #fff;
      background-color: #d58512;
      border-color: #b06d0f; }
  .btn-outline-warning.disabled:focus, .btn-outline-warning.disabled.focus, .btn-outline-warning:disabled:focus, .btn-outline-warning:disabled.focus {
    border-color: #f8d9ac; }
  .btn-outline-warning.disabled:hover, .btn-outline-warning:disabled:hover {
    border-color: #f8d9ac; }

.btn-outline-danger {
  color: #B85C5C;
  background-image: none;
  background-color: transparent;
  border-color: #B85C5C; }
  .btn-outline-danger:hover {
    color: #fff;
    background-color: #B85C5C;
    border-color: #B85C5C; }
  .btn-outline-danger:focus, .btn-outline-danger.focus {
    color: #fff;
    background-color: #B85C5C;
    border-color: #B85C5C; }
  .btn-outline-danger:active, .btn-outline-danger.active,
  .open > .btn-outline-danger.dropdown-toggle {
    color: #fff;
    background-color: #B85C5C;
    border-color: #B85C5C; }
    .btn-outline-danger:active:hover, .btn-outline-danger:active:focus, .btn-outline-danger:active.focus, .btn-outline-danger.active:hover, .btn-outline-danger.active:focus, .btn-outline-danger.active.focus,
    .open > .btn-outline-danger.dropdown-toggle:hover,
    .open > .btn-outline-danger.dropdown-toggle:focus,
    .open > .btn-outline-danger.dropdown-toggle.focus {
      color: #fff;
      background-color: #843939;
      border-color: #672d2d; }
  .btn-outline-danger.disabled:focus, .btn-outline-danger.disabled.focus, .btn-outline-danger:disabled:focus, .btn-outline-danger:disabled.focus {
    border-color: #d7a3a3; }
  .btn-outline-danger.disabled:hover, .btn-outline-danger:disabled:hover {
    border-color: #d7a3a3; }

.btn-link {
  font-weight: normal;
  color: #5CB85C;
  border-radius: 0; }
  .btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {
    background-color: transparent; }
  .btn-link, .btn-link:focus, .btn-link:active {
    border-color: transparent; }
  .btn-link:hover {
    border-color: transparent; }
  .btn-link:focus, .btn-link:hover {
    color: #3d8b3d;
    text-decoration: underline;
    background-color: transparent; }
  .btn-link:disabled:focus, .btn-link:disabled:hover {
    color: #818a91;
    text-decoration: none; }

.btn-lg, .btn-group-lg > .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem; }

.btn-sm, .btn-group-sm > .btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem; }

.btn-block {
  display: block;
  width: 100%; }

.btn-block + .btn-block {
  margin-top: 5px; }

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%; }

.fade {
  opacity: 0;
  transition: opacity .15s linear; }
  .fade.in {
    opacity: 1; }

.collapse {
  display: none; }
  .collapse.in {
    display: block; }

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition-timing-function: ease;
  transition-duration: .35s;
  transition-property: height; }

.dropup,
.dropdown {
  position: relative; }

.dropdown-toggle::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-right: .25rem;
  margin-left: .25rem;
  vertical-align: middle;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-left: 0.3em solid transparent; }

.dropdown-toggle:focus {
  outline: 0; }

.dropup .dropdown-toggle::after {
  border-top: 0;
  border-bottom: 0.3em solid; }

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 1rem;
  color: #373a3c;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem; }

.dropdown-divider {
  height: 1px;
  margin: 0.5rem 0;
  overflow: hidden;
  background-color: #e5e5e5; }

.dropdown-item {
  display: block;
  width: 100%;
  padding: 3px 20px;
  clear: both;
  font-weight: normal;
  color: #373a3c;
  text-align: inherit;
  white-space: nowrap;
  background: none;
  border: 0; }
  .dropdown-item:focus, .dropdown-item:hover {
    color: #2b2d2f;
    text-decoration: none;
    background-color: #f5f5f5; }
  .dropdown-item.active, .dropdown-item.active:focus, .dropdown-item.active:hover {
    color: #fff;
    text-decoration: none;
    background-color: #5CB85C;
    outline: 0; }
  .dropdown-item.disabled, .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {
    color: #818a91; }
  .dropdown-item.disabled:focus, .dropdown-item.disabled:hover {
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
    background-image: none;
    filter: "progid:DXImageTransform.Microsoft.gradient(enabled = false)"; }

.open > .dropdown-menu {
  display: block; }

.open > a {
  outline: 0; }

.dropdown-menu-right {
  right: 0;
  left: auto; }

.dropdown-menu-left {
  right: auto;
  left: 0; }

.dropdown-header {
  display: block;
  padding: 5px 20px;
  font-size: 0.875rem;
  color: #818a91;
  white-space: nowrap; }

.dropdown-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 990; }

.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  content: "";
  border-top: 0;
  border-bottom: 0.3em solid; }

.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 2px; }

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle; }
  .btn-group > .btn,
  .btn-group-vertical > .btn {
    position: relative;
    float: left; }
    .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,
    .btn-group-vertical > .btn:focus,
    .btn-group-vertical > .btn:active,
    .btn-group-vertical > .btn.active {
      z-index: 2; }
    .btn-group > .btn:hover,
    .btn-group-vertical > .btn:hover {
      z-index: 2; }

.btn-group .btn + .btn,
.btn-group .btn + .btn-group,
.btn-group .btn-group + .btn,
.btn-group .btn-group + .btn-group {
  margin-left: -1px; }

.btn-toolbar {
  margin-left: -5px; }
  .btn-toolbar::after {
    content: "";
    display: table;
    clear: both; }
  .btn-toolbar .btn-group,
  .btn-toolbar .input-group {
    float: left; }
  .btn-toolbar > .btn,
  .btn-toolbar > .btn-group,
  .btn-toolbar > .input-group {
    margin-left: 5px; }

.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {
  border-radius: 0; }

.btn-group > .btn:first-child {
  margin-left: 0; }
  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0; }

.btn-group > .btn:last-child:not(:first-child),
.btn-group > .dropdown-toggle:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0; }

.btn-group > .btn-group {
  float: left; }

.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0; }

.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0; }

.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0; }

.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0; }

.btn-group > .btn + .dropdown-toggle {
  padding-right: 8px;
  padding-left: 8px; }

.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {
  padding-right: 12px;
  padding-left: 12px; }

.btn .caret {
  margin-left: 0; }

.btn-lg .caret, .btn-group-lg > .btn .caret {
  border-width: 0.3em 0.3em 0;
  border-bottom-width: 0; }

.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {
  border-width: 0 0.3em 0.3em; }

.btn-group-vertical > .btn,
.btn-group-vertical > .btn-group,
.btn-group-vertical > .btn-group > .btn {
  display: block;
  float: none;
  width: 100%;
  max-width: 100%; }

.btn-group-vertical > .btn-group::after {
  content: "";
  display: table;
  clear: both; }

.btn-group-vertical > .btn-group > .btn {
  float: none; }

.btn-group-vertical > .btn + .btn,
.btn-group-vertical > .btn + .btn-group,
.btn-group-vertical > .btn-group + .btn,
.btn-group-vertical > .btn-group + .btn-group {
  margin-top: -1px;
  margin-left: 0; }

.btn-group-vertical > .btn:not(:first-child):not(:last-child) {
  border-radius: 0; }

.btn-group-vertical > .btn:first-child:not(:last-child) {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0; }

.btn-group-vertical > .btn:last-child:not(:first-child) {
  border-top-right-radius: 0;
  border-top-left-radius: 0; }

.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {
  border-radius: 0; }

.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,
.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0; }

.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {
  border-top-right-radius: 0;
  border-top-left-radius: 0; }

[data-toggle="buttons"] > .btn input[type="radio"],
[data-toggle="buttons"] > .btn input[type="checkbox"],
[data-toggle="buttons"] > .btn-group > .btn input[type="radio"],
[data-toggle="buttons"] > .btn-group > .btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none; }

.input-group {
  position: relative;
  width: 100%;
  display: flex; }
  .input-group .form-control {
    position: relative;
    z-index: 2;
    flex: 1;
    margin-bottom: 0; }
    .input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {
      z-index: 3; }

.input-group-addon:not(:first-child):not(:last-child),
.input-group-btn:not(:first-child):not(:last-child),
.input-group .form-control:not(:first-child):not(:last-child) {
  border-radius: 0; }

.input-group-addon,
.input-group-btn {
  white-space: nowrap;
  vertical-align: middle; }

.input-group-addon {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25;
  color: #55595c;
  text-align: center;
  background-color: #eceeef;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem; }
  .input-group-addon.form-control-sm,
  .input-group-sm > .input-group-addon,
  .input-group-sm > .input-group-btn > .input-group-addon.btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    border-radius: 0.2rem; }
  .input-group-addon.form-control-lg,
  .input-group-lg > .input-group-addon,
  .input-group-lg > .input-group-btn > .input-group-addon.btn {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.3rem; }
  .input-group-addon input[type="radio"],
  .input-group-addon input[type="checkbox"] {
    margin-top: 0; }

.input-group .form-control:not(:last-child),
.input-group-addon:not(:last-child),
.input-group-btn:not(:last-child) > .btn,
.input-group-btn:not(:last-child) > .btn-group > .btn,
.input-group-btn:not(:last-child) > .dropdown-toggle,
.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),
.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0; }

.input-group-addon:not(:last-child) {
  border-right: 0; }

.input-group .form-control:not(:first-child),
.input-group-addon:not(:first-child),
.input-group-btn:not(:first-child) > .btn,
.input-group-btn:not(:first-child) > .btn-group > .btn,
.input-group-btn:not(:first-child) > .dropdown-toggle,
.input-group-btn:not(:last-child) > .btn:not(:first-child),
.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0; }

.form-control + .input-group-addon:not(:first-child) {
  border-left: 0; }

.input-group-btn {
  position: relative;
  font-size: 0;
  white-space: nowrap; }
  .input-group-btn > .btn {
    position: relative; }
    .input-group-btn > .btn + .btn {
      margin-left: -1px; }
    .input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {
      z-index: 3; }
  .input-group-btn:not(:last-child) > .btn,
  .input-group-btn:not(:last-child) > .btn-group {
    margin-right: -1px; }
  .input-group-btn:not(:first-child) > .btn,
  .input-group-btn:not(:first-child) > .btn-group {
    z-index: 2;
    margin-left: -1px; }
    .input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,
    .input-group-btn:not(:first-child) > .btn-group:focus,
    .input-group-btn:not(:first-child) > .btn-group:active,
    .input-group-btn:not(:first-child) > .btn-group:hover {
      z-index: 3; }

.custom-control {
  position: relative;
  display: inline;
  padding-left: 1.5rem;
  cursor: pointer; }
  .custom-control + .custom-control {
    margin-left: 1rem; }

.custom-control-input {
  position: absolute;
  z-index: -1;
  opacity: 0; }
  .custom-control-input:checked ~ .custom-control-indicator {
    color: #fff;
    background-color: #0074d9; }
  .custom-control-input:focus ~ .custom-control-indicator {
    box-shadow: 0 0 0 0.075rem #fff, 0 0 0 0.2rem #0074d9; }
  .custom-control-input:active ~ .custom-control-indicator {
    color: #fff;
    background-color: #84c6ff; }
  .custom-control-input:disabled ~ .custom-control-indicator {
    cursor: not-allowed;
    background-color: #eee; }
  .custom-control-input:disabled ~ .custom-control-description {
    color: #767676;
    cursor: not-allowed; }

.custom-control-indicator {
  position: absolute;
  top: .0625rem;
  left: 0;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  user-select: none;
  background-color: #ddd;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%; }

.custom-checkbox .custom-control-indicator {
  border-radius: 0.25rem; }

.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E"); }

.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {
  background-color: #0074d9;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E"); }

.custom-radio .custom-control-indicator {
  border-radius: 50%; }

.custom-radio .custom-control-input:checked ~ .custom-control-indicator {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E"); }

.custom-controls-stacked .custom-control {
  display: inline; }
  .custom-controls-stacked .custom-control::after {
    display: block;
    margin-bottom: 0.25rem;
    content: ""; }
  .custom-controls-stacked .custom-control + .custom-control {
    margin-left: 0; }

.custom-select {
  display: inline-block;
  max-width: 100%;
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  padding-right: 0.75rem \9;
  color: #55595c;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  background-image: none \9;
  background-size: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  -moz-appearance: none;
  -webkit-appearance: none; }
  .custom-select:focus {
    border-color: #51a7e8;
    outline: none; }
  .custom-select::-ms-expand {
    opacity: 0; }

.custom-select-sm {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  font-size: 75%; }

.custom-file {
  position: relative;
  display: inline-block;
  max-width: 100%;
  height: 2.5rem;
  cursor: pointer; }

.custom-file-input {
  min-width: 14rem;
  max-width: 100%;
  margin: 0;
  filter: alpha(opacity=0);
  opacity: 0; }

.custom-file-control {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  user-select: none;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0.25rem; }
  .custom-file-control:lang(en)::after {
    content: "Choose file..."; }
  .custom-file-control::before {
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    z-index: 6;
    display: block;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    color: #555;
    background-color: #eee;
    border: 1px solid #ddd;
    border-radius: 0 0.25rem 0.25rem 0; }
  .custom-file-control:lang(en)::before {
    content: "Browse"; }

.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none; }

.nav-link {
  display: inline-block; }
  .nav-link:focus, .nav-link:hover {
    text-decoration: none; }
  .nav-link.disabled {
    color: #818a91; }
    .nav-link.disabled, .nav-link.disabled:focus, .nav-link.disabled:hover {
      color: #818a91;
      cursor: not-allowed;
      background-color: transparent; }

.nav-inline .nav-item {
  display: inline-block; }

.nav-inline .nav-item + .nav-item,
.nav-inline .nav-link + .nav-link {
  margin-left: 1rem; }

.nav-tabs {
  border-bottom: 1px solid #ddd; }
  .nav-tabs::after {
    content: "";
    display: table;
    clear: both; }
  .nav-tabs .nav-item {
    float: left;
    margin-bottom: -1px; }
    .nav-tabs .nav-item + .nav-item {
      margin-left: 0.2rem; }
  .nav-tabs .nav-link {
    display: block;
    padding: 0.5em 1em;
    border: 1px solid transparent;
    border-radius: 0.25rem 0.25rem 0 0; }
    .nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {
      border-color: #eceeef #eceeef #ddd; }
    .nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:focus, .nav-tabs .nav-link.disabled:hover {
      color: #818a91;
      background-color: transparent;
      border-color: transparent; }
  .nav-tabs .nav-link.active, .nav-tabs .nav-link.active:focus, .nav-tabs .nav-link.active:hover,
  .nav-tabs .nav-item.open .nav-link,
  .nav-tabs .nav-item.open .nav-link:focus,
  .nav-tabs .nav-item.open .nav-link:hover {
    color: #55595c;
    background-color: #fff;
    border-color: #ddd #ddd transparent; }
  .nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-right-radius: 0;
    border-top-left-radius: 0; }

.nav-pills::after {
  content: "";
  display: table;
  clear: both; }

.nav-pills .nav-item {
  float: left; }
  .nav-pills .nav-item + .nav-item {
    margin-left: 0.2rem; }

.nav-pills .nav-link {
  display: block;
  padding: 0.5em 1em;
  border-radius: 0.25rem; }

.nav-pills .nav-link.active, .nav-pills .nav-link.active:focus, .nav-pills .nav-link.active:hover,
.nav-pills .nav-item.open .nav-link,
.nav-pills .nav-item.open .nav-link:focus,
.nav-pills .nav-item.open .nav-link:hover {
  color: #fff;
  cursor: default;
  background-color: #5CB85C; }

.nav-stacked .nav-item {
  display: block;
  float: none; }
  .nav-stacked .nav-item + .nav-item {
    margin-top: 0.2rem;
    margin-left: 0; }

.tab-content > .tab-pane {
  display: none; }

.tab-content > .active {
  display: block; }

.navbar {
  position: relative;
  padding: 0.5rem 1rem; }
  .navbar::after {
    content: "";
    display: table;
    clear: both; }
  @media (min-width: 544px) {
    .navbar {
      border-radius: 0.25rem; } }

.navbar-full {
  z-index: 1000; }
  @media (min-width: 544px) {
    .navbar-full {
      border-radius: 0; } }

.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030; }
  @media (min-width: 544px) {
    .navbar-fixed-top,
    .navbar-fixed-bottom {
      border-radius: 0; } }

.navbar-fixed-top {
  top: 0; }

.navbar-fixed-bottom {
  bottom: 0; }

.navbar-sticky-top {
  position: sticky;
  top: 0;
  z-index: 1030;
  width: 100%; }
  @media (min-width: 544px) {
    .navbar-sticky-top {
      border-radius: 0; } }

.navbar-brand {
  float: left;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-right: 1rem;
  font-size: 1.25rem; }
  .navbar-brand:focus, .navbar-brand:hover {
    text-decoration: none; }
  .navbar-brand > img {
    display: block; }

.navbar-divider {
  float: left;
  width: 1px;
  padding-top: .425rem;
  padding-bottom: .425rem;
  margin-right: 1rem;
  margin-left: 1rem;
  overflow: hidden; }
  .navbar-divider::before {
    content: "\\00a0"; }

.navbar-toggler {
  padding: .5rem .75rem;
  font-size: 1.25rem;
  line-height: 1;
  background: none;
  border: 1px solid transparent;
  border-radius: 0.25rem; }
  .navbar-toggler:focus, .navbar-toggler:hover {
    text-decoration: none; }

@media (min-width: 544px) {
  .navbar-toggleable-xs {
    display: block !important; } }

@media (min-width: 768px) {
  .navbar-toggleable-sm {
    display: block !important; } }

@media (min-width: 992px) {
  .navbar-toggleable-md {
    display: block !important; } }

.navbar-nav .nav-item {
  float: left; }

.navbar-nav .nav-link {
  display: block;
  padding-top: .425rem;
  padding-bottom: .425rem; }
  .navbar-nav .nav-link + .nav-link {
    margin-left: 1rem; }

.navbar-nav .nav-item + .nav-item {
  margin-left: 1rem; }

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.8); }
  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: rgba(0, 0, 0, 0.8); }

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.3); }
  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: rgba(0, 0, 0, 0.6); }

.navbar-light .navbar-nav .open > .nav-link, .navbar-light .navbar-nav .open > .nav-link:focus, .navbar-light .navbar-nav .open > .nav-link:hover,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .active > .nav-link:focus,
.navbar-light .navbar-nav .active > .nav-link:hover,
.navbar-light .navbar-nav .nav-link.open,
.navbar-light .navbar-nav .nav-link.open:focus,
.navbar-light .navbar-nav .nav-link.open:hover,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.active:focus,
.navbar-light .navbar-nav .nav-link.active:hover {
  color: rgba(0, 0, 0, 0.8); }

.navbar-light .navbar-divider {
  background-color: rgba(0, 0, 0, 0.075); }

.navbar-dark .navbar-brand {
  color: white; }
  .navbar-dark .navbar-brand:focus, .navbar-dark .navbar-brand:hover {
    color: white; }

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5); }
  .navbar-dark .navbar-nav .nav-link:focus, .navbar-dark .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 0.75); }

.navbar-dark .navbar-nav .open > .nav-link, .navbar-dark .navbar-nav .open > .nav-link:focus, .navbar-dark .navbar-nav .open > .nav-link:hover,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link:focus,
.navbar-dark .navbar-nav .active > .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.open,
.navbar-dark .navbar-nav .nav-link.open:focus,
.navbar-dark .navbar-nav .nav-link.open:hover,
.navbar-dark .navbar-nav .nav-link.active,
.navbar-dark .navbar-nav .nav-link.active:focus,
.navbar-dark .navbar-nav .nav-link.active:hover {
  color: white; }

.navbar-dark .navbar-divider {
  background-color: rgba(255, 255, 255, 0.075); }

.card {
  position: relative;
  display: block;
  margin-bottom: 0.75rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.125); }

.card-block {
  padding: 1.25rem; }
  .card-block::after {
    content: "";
    display: table;
    clear: both; }

.card-title {
  margin-bottom: 0.75rem; }

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0; }

.card-text:last-child {
  margin-bottom: 0; }

.card-link:hover {
  text-decoration: none; }

.card-link + .card-link {
  margin-left: 1.25rem; }

.card > .list-group:first-child .list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem; }

.card > .list-group:last-child .list-group-item:last-child {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem; }

.card-header {
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.125); }
  .card-header::after {
    content: "";
    display: table;
    clear: both; }
  .card-header:first-child {
    border-radius: 0.25rem 0.25rem 0 0; }

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.125); }
  .card-footer::after {
    content: "";
    display: table;
    clear: both; }
  .card-footer:last-child {
    border-radius: 0 0 0.25rem 0.25rem; }

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0; }
  .card-header-tabs .nav-item {
    margin-bottom: 0; }

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem; }

.card-primary {
  background-color: #5CB85C;
  border-color: #5CB85C; }

.card-success {
  background-color: #5cb85c;
  border-color: #5cb85c; }

.card-info {
  background-color: #5bc0de;
  border-color: #5bc0de; }

.card-warning {
  background-color: #f0ad4e;
  border-color: #f0ad4e; }

.card-danger {
  background-color: #B85C5C;
  border-color: #B85C5C; }

.card-outline-primary {
  background-color: transparent;
  border-color: #5CB85C; }

.card-outline-secondary {
  background-color: transparent;
  border-color: #ccc; }

.card-outline-info {
  background-color: transparent;
  border-color: #5bc0de; }

.card-outline-success {
  background-color: transparent;
  border-color: #5cb85c; }

.card-outline-warning {
  background-color: transparent;
  border-color: #f0ad4e; }

.card-outline-danger {
  background-color: transparent;
  border-color: #B85C5C; }

.card-inverse .card-header,
.card-inverse .card-footer {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); }

.card-inverse .card-header,
.card-inverse .card-footer,
.card-inverse .card-title,
.card-inverse .card-blockquote {
  color: #fff; }

.card-inverse .card-link,
.card-inverse .card-text,
.card-inverse .card-blockquote > footer {
  color: rgba(255, 255, 255, 0.65); }

.card-inverse .card-link:focus, .card-inverse .card-link:hover {
  color: #fff; }

.card-blockquote {
  padding: 0;
  margin-bottom: 0;
  border-left: 0; }

.card-img {
  border-radius: 0.25rem; }

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem; }

.card-img-top {
  border-radius: 0.25rem 0.25rem 0 0; }

.card-img-bottom {
  border-radius: 0 0 0.25rem 0.25rem; }

@media (min-width: 544px) {
  .card-deck {
    display: flex;
    flex-flow: row wrap;
    margin-right: -0.625rem;
    margin-left: -0.625rem; }
    .card-deck .card {
      flex: 1 0 0;
      margin-right: 0.625rem;
      margin-left: 0.625rem; } }

@media (min-width: 544px) {
  .card-group {
    display: flex;
    flex-flow: row wrap; }
    .card-group .card {
      flex: 1 0 0; }
      .card-group .card + .card {
        margin-left: 0;
        border-left: 0; }
      .card-group .card:first-child {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0; }
        .card-group .card:first-child .card-img-top {
          border-top-right-radius: 0; }
        .card-group .card:first-child .card-img-bottom {
          border-bottom-right-radius: 0; }
      .card-group .card:last-child {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0; }
        .card-group .card:last-child .card-img-top {
          border-top-left-radius: 0; }
        .card-group .card:last-child .card-img-bottom {
          border-bottom-left-radius: 0; }
      .card-group .card:not(:first-child):not(:last-child) {
        border-radius: 0; }
        .card-group .card:not(:first-child):not(:last-child) .card-img-top,
        .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {
          border-radius: 0; } }

@media (min-width: 544px) {
  .card-columns {
    column-count: 3;
    column-gap: 1.25rem; }
    .card-columns .card {
      display: inline-block;
      width: 100%; } }

.breadcrumb {
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #eceeef;
  border-radius: 0.25rem; }
  .breadcrumb::after {
    content: "";
    display: table;
    clear: both; }

.breadcrumb-item {
  float: left; }
  .breadcrumb-item + .breadcrumb-item::before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    color: #818a91;
    content: "/"; }
  .breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration: underline; }
  .breadcrumb-item + .breadcrumb-item:hover::before {
    text-decoration: none; }
  .breadcrumb-item.active {
    color: #818a91; }

.pagination {
  display: inline-block;
  padding-left: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem; }

.page-item {
  display: inline; }
  .page-item:first-child .page-link {
    margin-left: 0;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem; }
  .page-item:last-child .page-link {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem; }
  .page-item.active .page-link, .page-item.active .page-link:focus, .page-item.active .page-link:hover {
    z-index: 2;
    color: #fff;
    cursor: default;
    background-color: #5CB85C;
    border-color: #5CB85C; }
  .page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {
    color: #818a91;
    pointer-events: none;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd; }

.page-link {
  position: relative;
  float: left;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  color: #5CB85C;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd; }
  .page-link:focus, .page-link:hover {
    color: #3d8b3d;
    background-color: #eceeef;
    border-color: #ddd; }

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem; }

.pagination-lg .page-item:first-child .page-link {
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem; }

.pagination-lg .page-item:last-child .page-link {
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem; }

.pagination-sm .page-link {
  padding: 0.275rem 0.75rem;
  font-size: 0.875rem; }

.pagination-sm .page-item:first-child .page-link {
  border-bottom-left-radius: 0.2rem;
  border-top-left-radius: 0.2rem; }

.pagination-sm .page-item:last-child .page-link {
  border-bottom-right-radius: 0.2rem;
  border-top-right-radius: 0.2rem; }

.tag {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: bold;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem; }
  .tag:empty {
    display: none; }

.btn .tag {
  position: relative;
  top: -1px; }

a.tag:focus, a.tag:hover {
  color: #fff;
  text-decoration: none;
  cursor: pointer; }

.tag-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem; }

.tag-default {
  background-color: #818a91; }
  .tag-default[href]:focus, .tag-default[href]:hover {
    background-color: #687077; }

.tag-primary {
  background-color: #5CB85C; }
  .tag-primary[href]:focus, .tag-primary[href]:hover {
    background-color: #449d44; }

.tag-success {
  background-color: #5cb85c; }
  .tag-success[href]:focus, .tag-success[href]:hover {
    background-color: #449d44; }

.tag-info {
  background-color: #5bc0de; }
  .tag-info[href]:focus, .tag-info[href]:hover {
    background-color: #31b0d5; }

.tag-warning {
  background-color: #f0ad4e; }
  .tag-warning[href]:focus, .tag-warning[href]:hover {
    background-color: #ec971f; }

.tag-danger {
  background-color: #B85C5C; }
  .tag-danger[href]:focus, .tag-danger[href]:hover {
    background-color: #9d4444; }

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #eceeef;
  border-radius: 0.3rem; }
  @media (min-width: 544px) {
    .jumbotron {
      padding: 4rem 2rem; } }

.jumbotron-hr {
  border-top-color: #d0d5d8; }

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0; }

.alert {
  padding: 15px;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem; }

.alert-heading {
  color: inherit; }

.alert-link {
  font-weight: bold; }

.alert-dismissible {
  padding-right: 35px; }
  .alert-dismissible .close {
    position: relative;
    top: -2px;
    right: -21px;
    color: inherit; }

.alert-success {
  background-color: #dff0d8;
  border-color: #d0e9c6;
  color: #3c763d; }
  .alert-success hr {
    border-top-color: #c1e2b3; }
  .alert-success .alert-link {
    color: #2b542c; }

.alert-info {
  background-color: #d9edf7;
  border-color: #bcdff1;
  color: #31708f; }
  .alert-info hr {
    border-top-color: #a6d5ec; }
  .alert-info .alert-link {
    color: #245269; }

.alert-warning {
  background-color: #fcf8e3;
  border-color: #faf2cc;
  color: #8a6d3b; }
  .alert-warning hr {
    border-top-color: #f7ecb5; }
  .alert-warning .alert-link {
    color: #66512c; }

.alert-danger {
  background-color: #f2dede;
  border-color: #ebcccc;
  color: #a94442; }
  .alert-danger hr {
    border-top-color: #e4b9b9; }
  .alert-danger .alert-link {
    color: #843534; }

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0; }
  to {
    background-position: 0 0; } }

.progress {
  display: block;
  width: 100%;
  height: 1rem;
  margin-bottom: 1rem; }

.progress[value] {
  background-color: #eee;
  border: 0;
  appearance: none;
  border-radius: 0.25rem; }

.progress[value]::-ms-fill {
  background-color: #0074d9;
  border: 0; }

.progress[value]::-moz-progress-bar {
  background-color: #0074d9;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem; }

.progress[value]::-webkit-progress-value {
  background-color: #0074d9;
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem; }

.progress[value="100"]::-moz-progress-bar {
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem; }

.progress[value="100"]::-webkit-progress-value {
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem; }

.progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 0.25rem; }

base::-moz-progress-bar,
.progress[value] {
  background-color: #eee;
  border-radius: 0.25rem; }

@media screen and (min-width: 0\0) {
  .progress {
    background-color: #eee;
    border-radius: 0.25rem; }
  .progress-bar {
    display: inline-block;
    height: 1rem;
    text-indent: -999rem;
    background-color: #0074d9;
    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem; }
  .progress[width="100%"] {
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem; } }

.progress-striped[value]::-webkit-progress-value {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem; }

.progress-striped[value]::-moz-progress-bar {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem; }

.progress-striped[value]::-ms-fill {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem; }

@media screen and (min-width: 0\0) {
  .progress-bar-striped {
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
    background-size: 1rem 1rem; } }

.progress-animated[value]::-webkit-progress-value {
  animation: progress-bar-stripes 2s linear infinite; }

.progress-animated[value]::-moz-progress-bar {
  animation: progress-bar-stripes 2s linear infinite; }

@media screen and (min-width: 0\0) {
  .progress-animated .progress-bar-striped {
    animation: progress-bar-stripes 2s linear infinite; } }

.progress-success[value]::-webkit-progress-value {
  background-color: #5cb85c; }

.progress-success[value]::-moz-progress-bar {
  background-color: #5cb85c; }

.progress-success[value]::-ms-fill {
  background-color: #5cb85c; }

@media screen and (min-width: 0\0) {
  .progress-success .progress-bar {
    background-color: #5cb85c; } }

.progress-info[value]::-webkit-progress-value {
  background-color: #5bc0de; }

.progress-info[value]::-moz-progress-bar {
  background-color: #5bc0de; }

.progress-info[value]::-ms-fill {
  background-color: #5bc0de; }

@media screen and (min-width: 0\0) {
  .progress-info .progress-bar {
    background-color: #5bc0de; } }

.progress-warning[value]::-webkit-progress-value {
  background-color: #f0ad4e; }

.progress-warning[value]::-moz-progress-bar {
  background-color: #f0ad4e; }

.progress-warning[value]::-ms-fill {
  background-color: #f0ad4e; }

@media screen and (min-width: 0\0) {
  .progress-warning .progress-bar {
    background-color: #f0ad4e; } }

.progress-danger[value]::-webkit-progress-value {
  background-color: #B85C5C; }

.progress-danger[value]::-moz-progress-bar {
  background-color: #B85C5C; }

.progress-danger[value]::-ms-fill {
  background-color: #B85C5C; }

@media screen and (min-width: 0\0) {
  .progress-danger .progress-bar {
    background-color: #B85C5C; } }

.media {
  display: flex;
  margin-bottom: 1rem; }

.media-body {
  flex: 1; }

.media-middle {
  align-self: center; }

.media-bottom {
  align-self: flex-end; }

.media-object {
  display: block; }
  .media-object.img-thumbnail {
    max-width: none; }

.media-right {
  padding-left: 10px; }

.media-left {
  padding-right: 10px; }

.media-heading {
  margin-top: 0;
  margin-bottom: 5px; }

.media-list {
  padding-left: 0;
  list-style: none; }

.list-group {
  padding-left: 0;
  margin-bottom: 0; }

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd; }
  .list-group-item:first-child {
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem; }
  .list-group-item:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem; }
  .list-group-item.disabled, .list-group-item.disabled:focus, .list-group-item.disabled:hover {
    color: #818a91;
    cursor: not-allowed;
    background-color: #eceeef; }
    .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading {
      color: inherit; }
    .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text {
      color: #818a91; }
  .list-group-item.active, .list-group-item.active:focus, .list-group-item.active:hover {
    z-index: 2;
    color: #fff;
    text-decoration: none;
    background-color: #5CB85C;
    border-color: #5CB85C; }
    .list-group-item.active .list-group-item-heading,
    .list-group-item.active .list-group-item-heading > small,
    .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,
    .list-group-item.active:focus .list-group-item-heading > small,
    .list-group-item.active:focus .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,
    .list-group-item.active:hover .list-group-item-heading > small,
    .list-group-item.active:hover .list-group-item-heading > .small {
      color: inherit; }
    .list-group-item.active .list-group-item-text, .list-group-item.active:focus .list-group-item-text, .list-group-item.active:hover .list-group-item-text {
      color: #eaf6ea; }

.list-group-flush .list-group-item {
  border-radius: 0; }

.list-group-item-action {
  width: 100%;
  color: #555;
  text-align: inherit; }
  .list-group-item-action .list-group-item-heading {
    color: #333; }
  .list-group-item-action:focus, .list-group-item-action:hover {
    color: #555;
    text-decoration: none;
    background-color: #f5f5f5; }

.list-group-item-success {
  color: #3c763d;
  background-color: #dff0d8; }

a.list-group-item-success,
button.list-group-item-success {
  color: #3c763d; }
  a.list-group-item-success .list-group-item-heading,
  button.list-group-item-success .list-group-item-heading {
    color: inherit; }
  a.list-group-item-success:focus, a.list-group-item-success:hover,
  button.list-group-item-success:focus,
  button.list-group-item-success:hover {
    color: #3c763d;
    background-color: #d0e9c6; }
  a.list-group-item-success.active, a.list-group-item-success.active:focus, a.list-group-item-success.active:hover,
  button.list-group-item-success.active,
  button.list-group-item-success.active:focus,
  button.list-group-item-success.active:hover {
    color: #fff;
    background-color: #3c763d;
    border-color: #3c763d; }

.list-group-item-info {
  color: #31708f;
  background-color: #d9edf7; }

a.list-group-item-info,
button.list-group-item-info {
  color: #31708f; }
  a.list-group-item-info .list-group-item-heading,
  button.list-group-item-info .list-group-item-heading {
    color: inherit; }
  a.list-group-item-info:focus, a.list-group-item-info:hover,
  button.list-group-item-info:focus,
  button.list-group-item-info:hover {
    color: #31708f;
    background-color: #c4e3f3; }
  a.list-group-item-info.active, a.list-group-item-info.active:focus, a.list-group-item-info.active:hover,
  button.list-group-item-info.active,
  button.list-group-item-info.active:focus,
  button.list-group-item-info.active:hover {
    color: #fff;
    background-color: #31708f;
    border-color: #31708f; }

.list-group-item-warning {
  color: #8a6d3b;
  background-color: #fcf8e3; }

a.list-group-item-warning,
button.list-group-item-warning {
  color: #8a6d3b; }
  a.list-group-item-warning .list-group-item-heading,
  button.list-group-item-warning .list-group-item-heading {
    color: inherit; }
  a.list-group-item-warning:focus, a.list-group-item-warning:hover,
  button.list-group-item-warning:focus,
  button.list-group-item-warning:hover {
    color: #8a6d3b;
    background-color: #faf2cc; }
  a.list-group-item-warning.active, a.list-group-item-warning.active:focus, a.list-group-item-warning.active:hover,
  button.list-group-item-warning.active,
  button.list-group-item-warning.active:focus,
  button.list-group-item-warning.active:hover {
    color: #fff;
    background-color: #8a6d3b;
    border-color: #8a6d3b; }

.list-group-item-danger {
  color: #a94442;
  background-color: #f2dede; }

a.list-group-item-danger,
button.list-group-item-danger {
  color: #a94442; }
  a.list-group-item-danger .list-group-item-heading,
  button.list-group-item-danger .list-group-item-heading {
    color: inherit; }
  a.list-group-item-danger:focus, a.list-group-item-danger:hover,
  button.list-group-item-danger:focus,
  button.list-group-item-danger:hover {
    color: #a94442;
    background-color: #ebcccc; }
  a.list-group-item-danger.active, a.list-group-item-danger.active:focus, a.list-group-item-danger.active:hover,
  button.list-group-item-danger.active,
  button.list-group-item-danger.active:focus,
  button.list-group-item-danger.active:hover {
    color: #fff;
    background-color: #a94442;
    border-color: #a94442; }

.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px; }

.list-group-item-text {
  margin-bottom: 0;
  line-height: 1.3; }

.embed-responsive {
  position: relative;
  display: block;
  height: 0;
  padding: 0;
  overflow: hidden; }
  .embed-responsive .embed-responsive-item,
  .embed-responsive iframe,
  .embed-responsive embed,
  .embed-responsive object,
  .embed-responsive video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0; }

.embed-responsive-21by9 {
  padding-bottom: 42.85714%; }

.embed-responsive-16by9 {
  padding-bottom: 56.25%; }

.embed-responsive-4by3 {
  padding-bottom: 75%; }

.embed-responsive-1by1 {
  padding-bottom: 100%; }

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .2; }
  .close:focus, .close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    opacity: .5; }

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none; }

.modal-open {
  overflow: hidden; }

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  outline: 0;
  -webkit-overflow-scrolling: touch; }
  .modal.fade .modal-dialog {
    transition: transform .3s ease-out;
    transform: translate(0, -25%); }
  .modal.in .modal-dialog {
    transform: translate(0, 0); }

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto; }

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px; }

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0; }

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000; }
  .modal-backdrop.fade {
    opacity: 0; }
  .modal-backdrop.in {
    opacity: 0.5; }

.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5; }
  .modal-header::after {
    content: "";
    display: table;
    clear: both; }

.modal-header .close {
  margin-top: -2px; }

.modal-title {
  margin: 0;
  line-height: 1.5; }

.modal-body {
  position: relative;
  padding: 15px; }

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5; }
  .modal-footer::after {
    content: "";
    display: table;
    clear: both; }

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll; }

@media (min-width: 544px) {
  .modal-dialog {
    max-width: 600px;
    margin: 30px auto; }
  .modal-sm {
    max-width: 300px; } }

@media (min-width: 992px) {
  .modal-lg {
    max-width: 900px; } }

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: 0; }
  .tooltip.in {
    opacity: 0.9; }
  .tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {
    padding: 5px 0;
    margin-top: -3px; }
    .tooltip.tooltip-top .tooltip-arrow, .tooltip.bs-tether-element-attached-bottom .tooltip-arrow {
      bottom: 0;
      left: 50%;
      margin-left: -5px;
      border-width: 5px 5px 0;
      border-top-color: #000; }
  .tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {
    padding: 0 5px;
    margin-left: 3px; }
    .tooltip.tooltip-right .tooltip-arrow, .tooltip.bs-tether-element-attached-left .tooltip-arrow {
      top: 50%;
      left: 0;
      margin-top: -5px;
      border-width: 5px 5px 5px 0;
      border-right-color: #000; }
  .tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {
    padding: 5px 0;
    margin-top: 3px; }
    .tooltip.tooltip-bottom .tooltip-arrow, .tooltip.bs-tether-element-attached-top .tooltip-arrow {
      top: 0;
      left: 50%;
      margin-left: -5px;
      border-width: 0 5px 5px;
      border-bottom-color: #000; }
  .tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {
    padding: 0 5px;
    margin-left: -3px; }
    .tooltip.tooltip-left .tooltip-arrow, .tooltip.bs-tether-element-attached-right .tooltip-arrow {
      top: 50%;
      right: 0;
      margin-top: -5px;
      border-width: 5px 0 5px 5px;
      border-left-color: #000; }

.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem; }

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid; }

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  padding: 1px;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem; }
  .popover.popover-top, .popover.bs-tether-element-attached-bottom {
    margin-top: -10px; }
    .popover.popover-top .popover-arrow, .popover.bs-tether-element-attached-bottom .popover-arrow {
      bottom: -11px;
      left: 50%;
      margin-left: -11px;
      border-top-color: rgba(0, 0, 0, 0.25);
      border-bottom-width: 0; }
      .popover.popover-top .popover-arrow::after, .popover.bs-tether-element-attached-bottom .popover-arrow::after {
        bottom: 1px;
        margin-left: -10px;
        content: "";
        border-top-color: #fff;
        border-bottom-width: 0; }
  .popover.popover-right, .popover.bs-tether-element-attached-left {
    margin-left: 10px; }
    .popover.popover-right .popover-arrow, .popover.bs-tether-element-attached-left .popover-arrow {
      top: 50%;
      left: -11px;
      margin-top: -11px;
      border-right-color: rgba(0, 0, 0, 0.25);
      border-left-width: 0; }
      .popover.popover-right .popover-arrow::after, .popover.bs-tether-element-attached-left .popover-arrow::after {
        bottom: -10px;
        left: 1px;
        content: "";
        border-right-color: #fff;
        border-left-width: 0; }
  .popover.popover-bottom, .popover.bs-tether-element-attached-top {
    margin-top: 10px; }
    .popover.popover-bottom .popover-arrow, .popover.bs-tether-element-attached-top .popover-arrow {
      top: -11px;
      left: 50%;
      margin-left: -11px;
      border-top-width: 0;
      border-bottom-color: rgba(0, 0, 0, 0.25); }
      .popover.popover-bottom .popover-arrow::after, .popover.bs-tether-element-attached-top .popover-arrow::after {
        top: 1px;
        margin-left: -10px;
        content: "";
        border-top-width: 0;
        border-bottom-color: #fff; }
  .popover.popover-left, .popover.bs-tether-element-attached-right {
    margin-left: -10px; }
    .popover.popover-left .popover-arrow, .popover.bs-tether-element-attached-right .popover-arrow {
      top: 50%;
      right: -11px;
      margin-top: -11px;
      border-right-width: 0;
      border-left-color: rgba(0, 0, 0, 0.25); }
      .popover.popover-left .popover-arrow::after, .popover.bs-tether-element-attached-right .popover-arrow::after {
        right: 1px;
        bottom: -10px;
        content: "";
        border-right-width: 0;
        border-left-color: #fff; }

.popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 1rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 0.2375rem 0.2375rem 0 0; }

.popover-content {
  padding: 9px 14px; }

.popover-arrow, .popover-arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid; }

.popover-arrow {
  border-width: 11px; }

.popover-arrow::after {
  content: "";
  border-width: 10px; }

.carousel {
  position: relative; }

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden; }
  .carousel-inner > .carousel-item {
    position: relative;
    display: none;
    transition: .6s ease-in-out left; }
    .carousel-inner > .carousel-item > img,
    .carousel-inner > .carousel-item > a > img {
      line-height: 1; }
    @media all and (transform-3d), (-webkit-transform-3d) {
      .carousel-inner > .carousel-item {
        transition: transform .6s ease-in-out;
        backface-visibility: hidden;
        perspective: 1000px; }
        .carousel-inner > .carousel-item.next, .carousel-inner > .carousel-item.active.right {
          left: 0;
          transform: translate3d(100%, 0, 0); }
        .carousel-inner > .carousel-item.prev, .carousel-inner > .carousel-item.active.left {
          left: 0;
          transform: translate3d(-100%, 0, 0); }
        .carousel-inner > .carousel-item.next.left, .carousel-inner > .carousel-item.prev.right, .carousel-inner > .carousel-item.active {
          left: 0;
          transform: translate3d(0, 0, 0); } }
  .carousel-inner > .active,
  .carousel-inner > .next,
  .carousel-inner > .prev {
    display: block; }
  .carousel-inner > .active {
    left: 0; }
  .carousel-inner > .next,
  .carousel-inner > .prev {
    position: absolute;
    top: 0;
    width: 100%; }
  .carousel-inner > .next {
    left: 100%; }
  .carousel-inner > .prev {
    left: -100%; }
  .carousel-inner > .next.left,
  .carousel-inner > .prev.right {
    left: 0; }
  .carousel-inner > .active.left {
    left: -100%; }
  .carousel-inner > .active.right {
    left: 100%; }

.carousel-control {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 15%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
  opacity: 0.5; }
  .carousel-control.left {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }
  .carousel-control.right {
    right: 0;
    left: auto;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }
  .carousel-control:focus, .carousel-control:hover {
    color: #fff;
    text-decoration: none;
    outline: 0;
    opacity: .9; }
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    position: absolute;
    top: 50%;
    z-index: 5;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    font-family: serif;
    line-height: 1; }
  .carousel-control .icon-prev {
    left: 50%;
    margin-left: -10px; }
  .carousel-control .icon-next {
    right: 50%;
    margin-right: -10px; }
  .carousel-control .icon-prev::before {
    content: "\\2039"; }
  .carousel-control .icon-next::before {
    content: "\\203a"; }

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  z-index: 15;
  width: 60%;
  padding-left: 0;
  margin-left: -30%;
  text-align: center;
  list-style: none; }
  .carousel-indicators li {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1px;
    text-indent: -999px;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 10px; }
  .carousel-indicators .active {
    width: 12px;
    height: 12px;
    margin: 0;
    background-color: #fff; }

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }
  .carousel-caption .btn {
    text-shadow: none; }

@media (min-width: 544px) {
  .carousel-control .icon-prev,
  .carousel-control .icon-next {
    width: 30px;
    height: 30px;
    margin-top: -15px;
    font-size: 30px; }
  .carousel-control .icon-prev {
    margin-left: -15px; }
  .carousel-control .icon-next {
    margin-right: -15px; }
  .carousel-caption {
    right: 20%;
    left: 20%;
    padding-bottom: 30px; }
  .carousel-indicators {
    bottom: 20px; } }

.bg-inverse {
  color: #eceeef;
  background-color: #373a3c; }

.bg-faded {
  background-color: #f7f7f9; }

.bg-primary {
  color: #fff !important;
  background-color: #5CB85C !important; }

a.bg-primary:focus, a.bg-primary:hover {
  background-color: #449d44 !important; }

.bg-success {
  color: #fff !important;
  background-color: #5cb85c !important; }

a.bg-success:focus, a.bg-success:hover {
  background-color: #449d44 !important; }

.bg-info {
  color: #fff !important;
  background-color: #5bc0de !important; }

a.bg-info:focus, a.bg-info:hover {
  background-color: #31b0d5 !important; }

.bg-warning {
  color: #fff !important;
  background-color: #f0ad4e !important; }

a.bg-warning:focus, a.bg-warning:hover {
  background-color: #ec971f !important; }

.bg-danger {
  color: #fff !important;
  background-color: #B85C5C !important; }

a.bg-danger:focus, a.bg-danger:hover {
  background-color: #9d4444 !important; }

.clearfix::after {
  content: "";
  display: table;
  clear: both; }

.pull-xs-left {
  float: left !important; }

.pull-xs-right {
  float: right !important; }

.pull-xs-none {
  float: none !important; }

@media (min-width: 544px) {
  .pull-sm-left {
    float: left !important; }
  .pull-sm-right {
    float: right !important; }
  .pull-sm-none {
    float: none !important; } }

@media (min-width: 768px) {
  .pull-md-left {
    float: left !important; }
  .pull-md-right {
    float: right !important; }
  .pull-md-none {
    float: none !important; } }

@media (min-width: 992px) {
  .pull-lg-left {
    float: left !important; }
  .pull-lg-right {
    float: right !important; }
  .pull-lg-none {
    float: none !important; } }

@media (min-width: 1200px) {
  .pull-xl-left {
    float: left !important; }
  .pull-xl-right {
    float: right !important; }
  .pull-xl-none {
    float: none !important; } }

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0; }

.sr-only-focusable:active, .sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  clip: auto; }

.m-x-auto {
  margin-right: auto !important;
  margin-left: auto !important; }

.m-a-0 {
  margin: 0 0 !important; }

.m-t-0 {
  margin-top: 0 !important; }

.m-r-0 {
  margin-right: 0 !important; }

.m-b-0 {
  margin-bottom: 0 !important; }

.m-l-0 {
  margin-left: 0 !important; }

.m-x-0 {
  margin-right: 0 !important;
  margin-left: 0 !important; }

.m-y-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important; }

.m-a-1 {
  margin: 1rem 1rem !important; }

.m-t-1 {
  margin-top: 1rem !important; }

.m-r-1 {
  margin-right: 1rem !important; }

.m-b-1 {
  margin-bottom: 1rem !important; }

.m-l-1 {
  margin-left: 1rem !important; }

.m-x-1 {
  margin-right: 1rem !important;
  margin-left: 1rem !important; }

.m-y-1 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important; }

.m-a-2 {
  margin: 1.5rem 1.5rem !important; }

.m-t-2 {
  margin-top: 1.5rem !important; }

.m-r-2 {
  margin-right: 1.5rem !important; }

.m-b-2 {
  margin-bottom: 1.5rem !important; }

.m-l-2 {
  margin-left: 1.5rem !important; }

.m-x-2 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important; }

.m-y-2 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important; }

.m-a-3 {
  margin: 3rem 3rem !important; }

.m-t-3 {
  margin-top: 3rem !important; }

.m-r-3 {
  margin-right: 3rem !important; }

.m-b-3 {
  margin-bottom: 3rem !important; }

.m-l-3 {
  margin-left: 3rem !important; }

.m-x-3 {
  margin-right: 3rem !important;
  margin-left: 3rem !important; }

.m-y-3 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important; }

.p-a-0 {
  padding: 0 0 !important; }

.p-t-0 {
  padding-top: 0 !important; }

.p-r-0 {
  padding-right: 0 !important; }

.p-b-0 {
  padding-bottom: 0 !important; }

.p-l-0 {
  padding-left: 0 !important; }

.p-x-0 {
  padding-right: 0 !important;
  padding-left: 0 !important; }

.p-y-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important; }

.p-a-1 {
  padding: 1rem 1rem !important; }

.p-t-1 {
  padding-top: 1rem !important; }

.p-r-1 {
  padding-right: 1rem !important; }

.p-b-1 {
  padding-bottom: 1rem !important; }

.p-l-1 {
  padding-left: 1rem !important; }

.p-x-1 {
  padding-right: 1rem !important;
  padding-left: 1rem !important; }

.p-y-1 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important; }

.p-a-2 {
  padding: 1.5rem 1.5rem !important; }

.p-t-2 {
  padding-top: 1.5rem !important; }

.p-r-2 {
  padding-right: 1.5rem !important; }

.p-b-2 {
  padding-bottom: 1.5rem !important; }

.p-l-2 {
  padding-left: 1.5rem !important; }

.p-x-2 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important; }

.p-y-2 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important; }

.p-a-3 {
  padding: 3rem 3rem !important; }

.p-t-3 {
  padding-top: 3rem !important; }

.p-r-3 {
  padding-right: 3rem !important; }

.p-b-3 {
  padding-bottom: 3rem !important; }

.p-l-3 {
  padding-left: 3rem !important; }

.p-x-3 {
  padding-right: 3rem !important;
  padding-left: 3rem !important; }

.p-y-3 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important; }

.pos-f-t {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030; }

.text-justify {
  text-align: justify !important; }

.text-nowrap {
  white-space: nowrap !important; }

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; }

.text-xs-left {
  text-align: left !important; }

.text-xs-right {
  text-align: right !important; }

.text-xs-center {
  text-align: center !important; }

@media (min-width: 544px) {
  .text-sm-left {
    text-align: left !important; }
  .text-sm-right {
    text-align: right !important; }
  .text-sm-center {
    text-align: center !important; } }

@media (min-width: 768px) {
  .text-md-left {
    text-align: left !important; }
  .text-md-right {
    text-align: right !important; }
  .text-md-center {
    text-align: center !important; } }

@media (min-width: 992px) {
  .text-lg-left {
    text-align: left !important; }
  .text-lg-right {
    text-align: right !important; }
  .text-lg-center {
    text-align: center !important; } }

@media (min-width: 1200px) {
  .text-xl-left {
    text-align: left !important; }
  .text-xl-right {
    text-align: right !important; }
  .text-xl-center {
    text-align: center !important; } }

.text-lowercase {
  text-transform: lowercase !important; }

.text-uppercase {
  text-transform: uppercase !important; }

.text-capitalize {
  text-transform: capitalize !important; }

.font-weight-normal {
  font-weight: normal; }

.font-weight-bold {
  font-weight: bold; }

.font-italic {
  font-style: italic; }

.text-muted {
  color: #818a91 !important; }

a.text-muted:focus, a.text-muted:hover {
  color: #687077; }

.text-primary {
  color: #5CB85C !important; }

a.text-primary:focus, a.text-primary:hover {
  color: #449d44; }

.text-success {
  color: #5cb85c !important; }

a.text-success:focus, a.text-success:hover {
  color: #449d44; }

.text-info {
  color: #5bc0de !important; }

a.text-info:focus, a.text-info:hover {
  color: #31b0d5; }

.text-warning {
  color: #f0ad4e !important; }

a.text-warning:focus, a.text-warning:hover {
  color: #ec971f; }

.text-danger {
  color: #B85C5C !important; }

a.text-danger:focus, a.text-danger:hover {
  color: #9d4444; }

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0; }

.invisible {
  visibility: hidden !important; }

.hidden-xs-up {
  display: none !important; }

@media (max-width: 543px) {
  .hidden-xs-down {
    display: none !important; } }

@media (min-width: 544px) {
  .hidden-sm-up {
    display: none !important; } }

@media (max-width: 767px) {
  .hidden-sm-down {
    display: none !important; } }

@media (min-width: 768px) {
  .hidden-md-up {
    display: none !important; } }

@media (max-width: 991px) {
  .hidden-md-down {
    display: none !important; } }

@media (min-width: 992px) {
  .hidden-lg-up {
    display: none !important; } }

@media (max-width: 1199px) {
  .hidden-lg-down {
    display: none !important; } }

@media (min-width: 1200px) {
  .hidden-xl-up {
    display: none !important; } }

.hidden-xl-down {
  display: none !important; }

.visible-print-block {
  display: none !important; }
  @media print {
    .visible-print-block {
      display: block !important; } }

.visible-print-inline {
  display: none !important; }
  @media print {
    .visible-print-inline {
      display: inline !important; } }

.visible-print-inline-block {
  display: none !important; }
  @media print {
    .visible-print-inline-block {
      display: inline-block !important; } }

@media print {
  .hidden-print {
    display: none !important; } }

.flex-xs-first {
  order: -1; }

.flex-xs-last {
  order: 1; }

.flex-items-xs-top {
  align-items: flex-start; }

.flex-items-xs-middle {
  align-items: center; }

.flex-items-xs-bottom {
  align-items: flex-end; }

.flex-xs-top {
  align-self: flex-start; }

.flex-xs-middle {
  align-self: center; }

.flex-xs-bottom {
  align-self: flex-end; }

.flex-items-xs-left {
  justify-content: flex-start; }

.flex-items-xs-center {
  justify-content: center; }

.flex-items-xs-right {
  justify-content: flex-end; }

.flex-items-xs-around {
  justify-content: space-around; }

.flex-items-xs-between {
  justify-content: space-between; }

@media (min-width: 544px) {
  .flex-sm-first {
    order: -1; }
  .flex-sm-last {
    order: 1; } }

@media (min-width: 544px) {
  .flex-items-sm-top {
    align-items: flex-start; }
  .flex-items-sm-middle {
    align-items: center; }
  .flex-items-sm-bottom {
    align-items: flex-end; } }

@media (min-width: 544px) {
  .flex-sm-top {
    align-self: flex-start; }
  .flex-sm-middle {
    align-self: center; }
  .flex-sm-bottom {
    align-self: flex-end; } }

@media (min-width: 544px) {
  .flex-items-sm-left {
    justify-content: flex-start; }
  .flex-items-sm-center {
    justify-content: center; }
  .flex-items-sm-right {
    justify-content: flex-end; }
  .flex-items-sm-around {
    justify-content: space-around; }
  .flex-items-sm-between {
    justify-content: space-between; } }

@media (min-width: 768px) {
  .flex-md-first {
    order: -1; }
  .flex-md-last {
    order: 1; } }

@media (min-width: 768px) {
  .flex-items-md-top {
    align-items: flex-start; }
  .flex-items-md-middle {
    align-items: center; }
  .flex-items-md-bottom {
    align-items: flex-end; } }

@media (min-width: 768px) {
  .flex-md-top {
    align-self: flex-start; }
  .flex-md-middle {
    align-self: center; }
  .flex-md-bottom {
    align-self: flex-end; } }

@media (min-width: 768px) {
  .flex-items-md-left {
    justify-content: flex-start; }
  .flex-items-md-center {
    justify-content: center; }
  .flex-items-md-right {
    justify-content: flex-end; }
  .flex-items-md-around {
    justify-content: space-around; }
  .flex-items-md-between {
    justify-content: space-between; } }

@media (min-width: 992px) {
  .flex-lg-first {
    order: -1; }
  .flex-lg-last {
    order: 1; } }

@media (min-width: 992px) {
  .flex-items-lg-top {
    align-items: flex-start; }
  .flex-items-lg-middle {
    align-items: center; }
  .flex-items-lg-bottom {
    align-items: flex-end; } }

@media (min-width: 992px) {
  .flex-lg-top {
    align-self: flex-start; }
  .flex-lg-middle {
    align-self: center; }
  .flex-lg-bottom {
    align-self: flex-end; } }

@media (min-width: 992px) {
  .flex-items-lg-left {
    justify-content: flex-start; }
  .flex-items-lg-center {
    justify-content: center; }
  .flex-items-lg-right {
    justify-content: flex-end; }
  .flex-items-lg-around {
    justify-content: space-around; }
  .flex-items-lg-between {
    justify-content: space-between; } }

@media (min-width: 1200px) {
  .flex-xl-first {
    order: -1; }
  .flex-xl-last {
    order: 1; } }

@media (min-width: 1200px) {
  .flex-items-xl-top {
    align-items: flex-start; }
  .flex-items-xl-middle {
    align-items: center; }
  .flex-items-xl-bottom {
    align-items: flex-end; } }

@media (min-width: 1200px) {
  .flex-xl-top {
    align-self: flex-start; }
  .flex-xl-middle {
    align-self: center; }
  .flex-xl-bottom {
    align-self: flex-end; } }

@media (min-width: 1200px) {
  .flex-items-xl-left {
    justify-content: flex-start; }
  .flex-items-xl-center {
    justify-content: center; }
  .flex-items-xl-right {
    justify-content: flex-end; }
  .flex-items-xl-around {
    justify-content: space-around; }
  .flex-items-xl-between {
    justify-content: space-between; } }

.tag-default {
  color: #fff !important;
  font-size: 0.8rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  white-space: nowrap;
  margin-right: 3px;
  margin-bottom: 0.2rem;
  display: inline-block; }
  .tag-default:hover {
    text-decoration: none; }
  .tag-default.tag-outline {
    border: 1px solid #ddd;
    color: #aaa !important;
    background: none !important; }

ul.tag-list {
  padding-left: 0px !important;
  display: inline-block;
  list-style: none !important; }
  ul.tag-list li {
    display: inline-block !important; }

.navbar-brand {
  font-family: "Titillium Web", sans-serif;
  font-size: 1.5rem !important;
  padding-top: 0rem !important;
  margin-right: 2rem !important;
  color: #5CB85C !important; }

.nav-link .user-pic {
  height: 26px;
  border-radius: 50px;
  float: left;
  margin-right: 5px; }

.nav-link:hover {
  transition: 0.1s all; }

.nav-pills.outline-active .nav-link {
  border-radius: 0px;
  border: none;
  border-bottom: 2px solid transparent;
  background: transparent;
  color: #aaa; }
  .nav-pills.outline-active .nav-link:hover {
    color: #555; }
  .nav-pills.outline-active .nav-link.active {
    background: #fff !important;
    border-bottom: 2px solid #5CB85C !important;
    color: #5CB85C !important; }

footer {
  background: #f3f3f3;
  margin-top: 3rem;
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  width: 100%; }
  footer .logo-font {
    vertical-align: middle; }
  footer .attribution {
    vertical-align: middle;
    margin-left: 10px;
    font-size: 0.8rem;
    color: #bbb;
    font-weight: 300; }

.error-messages {
  color: #B85C5C !important;
  font-weight: bold; }

.banner {
  color: #fff;
  background: #333;
  padding: 2rem;
  margin-bottom: 2rem; }
  .banner h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 0px; }

.container.page {
  margin-top: 1.5rem; }

.preview-link {
  color: inherit !important; }
  .preview-link:hover {
    text-decoration: inherit !important; }

.article-meta {
  display: block;
  position: relative;
  font-weight: 300; }
  .article-meta img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px; }
  .article-meta .info {
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem; }
    .article-meta .info .author {
      display: block;
      font-weight: 500 !important; }
    .article-meta .info .date {
      color: #bbb;
      font-size: 0.8rem;
      display: block; }

.article-preview {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1.5rem 0; }
  .article-preview .article-meta {
    margin: 0 0 1rem 0; }
  .article-preview .preview-link h1 {
    font-weight: 600 !important;
    font-size: 1.5rem !important;
    margin-bottom: 3px; }
  .article-preview .preview-link p {
    font-weight: 300;
    font-size: 24px;
    color: #999;
    margin-bottom: 15px;
    font-size: 1rem;
    line-height: 1.3rem; }
  .article-preview .preview-link span {
    max-width: 30%;
    font-size: 0.8rem;
    font-weight: 300;
    color: #bbb;
    vertical-align: middle; }
  .article-preview .preview-link ul {
    float: right;
    max-width: 50%;
    vertical-align: top; }
    .article-preview .preview-link ul li {
      font-weight: 300;
      font-size: 0.8rem !important;
      padding-top: 0px !important;
      padding-bottom: 0px !important; }

.btn .counter {
  font-size: 0.8rem !important; }

.home-page .banner {
  background: #5CB85C;
  box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3); }
  .home-page .banner p {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300 !important;
    margin-bottom: 0px; }
  .home-page .banner h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    font-weight: 700 !important;
    text-align: center;
    font-size: 3.5rem;
    padding-bottom: 0.5rem; }

.home-page .feed-toggle {
  margin-bottom: -1px; }

.home-page .sidebar {
  padding: 5px 10px 10px 10px;
  background: #f3f3f3;
  border-radius: 4px; }
  .home-page .sidebar p {
    margin-bottom: 0.2rem; }

.article-page .banner {
  padding: 2rem 0 2rem 0; }
  .article-page .banner h1 {
    font-size: 2.8rem;
    font-weight: 600; }
  .article-page .banner .btn {
    opacity: 0.8; }
    .article-page .banner .btn:hover {
      transition: 0.1s all;
      opacity: 1; }
  .article-page .banner .article-meta {
    margin: 2rem 0 0 0; }
    .article-page .banner .article-meta .author {
      color: #fff; }

.article-page .article-content p {
  font-family: 'Source Serif Pro', serif;
  font-size: 1.2rem;
  line-height: 1.8rem;
  margin-bottom: 2rem; }

.article-page .article-content h1, .article-page .article-content h2, .article-page .article-content h3, .article-page .article-content h4, .article-page .article-content h5, .article-page .article-content h6 {
  font-weight: 500 !important;
  margin: 1.6rem 0 1rem 0; }

.article-page .article-actions {
  text-align: center;
  margin: 1.5rem 0 3rem 0; }
  .article-page .article-actions .article-meta .info {
    text-align: left; }

.article-page .comment-form .card-block {
  padding: 0; }
  .article-page .comment-form .card-block textarea {
    border: 0px;
    padding: 1.25rem; }

.article-page .comment-form .card-footer .btn {
  font-weight: 700;
  float: right; }

.article-page .comment-form .card-footer .comment-author-img {
  height: 30px;
  width: 30px; }

.article-page .card {
  border: 1px solid #e5e5e5;
  box-shadow: none !important; }
  .article-page .card .card-footer {
    border-top: 1px solid #e5e5e5;
    box-shadow: none !important;
    font-size: 0.8rem;
    font-weight: 300; }
  .article-page .card .comment-author-img {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 20px;
    border-radius: 30px; }
  .article-page .card .comment-author {
    display: inline-block;
    vertical-align: middle; }
  .article-page .card .date-posted {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    color: #bbb; }
  .article-page .card .mod-options {
    float: right;
    color: #333;
    font-size: 1rem; }
    .article-page .card .mod-options i {
      margin-left: 5px;
      opacity: 0.6;
      cursor: pointer; }
      .article-page .card .mod-options i:hover {
        opacity: 1; }

.profile-page .user-info {
  text-align: center;
  background: #f3f3f3;
  padding: 2rem 0 1rem 0; }
  .profile-page .user-info .user-img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-bottom: 1rem; }
  .profile-page .user-info h4 {
    font-weight: 700; }
  .profile-page .user-info p {
    margin: 0 auto 0.5rem auto;
    color: #aaa;
    max-width: 450px;
    font-weight: 300; }
  .profile-page .user-info .action-btn {
    float: right;
    color: #999;
    border: 1px solid #999; }

.profile-page .articles-toggle {
  margin: 1.5rem 0 -1px 0; }

.editor-page .tag-list i {
  font-size: 0.6rem;
  margin-right: 5px;
  cursor: pointer; }
`;
