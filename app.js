// lorem text
const text = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
  
  
`I'm baby distillery mustache thundercats normcore sriracha, taxidermy cronut. Try-hard PBR&B street art, literally meh wolf pabst lo-fi. Keffiyeh tumeric raw denim mustache small batch cornhole. Shabby chic disrupt taiyaki vape prism chambray glossier craft beer whatever bicycle rights. Cloud bread small batch gastropub, four dollar toast retro health goth echo park sustainable migas bicycle rights distillery neutra. Flannel listicle pinterest unicorn, master cleanse godard +1 narwhal. Iceland actually health goth, literally next level subway tile post-ironic art party kinfolk readymade hell of aesthetic selfies vape prism.`,

`Offal tilde echo park chia man bun. Vice literally disrupt thundercats. Tumblr polaroid meggings, venmo meh locavore blue bottle typewriter synth small batch vexillologist keytar DIY freegan. Fashion axe pabst cred everyday carry, coloring book raclette bespoke PBR&B food truck selfies deep v pickled waistcoat hella. Fam beard humblebrag organic, sustainable pinterest pickled tbh flannel coloring book gochujang before they sold out dreamcatcher. Swag aesthetic mlkshk 8-bit pour-over wayfarers tacos street art seitan.`,

`Lumbersexual art party neutra locavore, heirloom mumblecore bicycle rights. Direct trade next level banh mi 90's PBR&B. Af viral austin, flannel quinoa twee vinyl kombucha paleo semiotics meditation enamel pin. Four dollar toast pinterest gentrify succulents chicharrones.`,

`Hoodie activated charcoal godard sartorial williamsburg chartreuse austin jean shorts chillwave schlitz everyday carry. Banh mi meditation hoodie humblebrag master cleanse, brooklyn gochujang sustainable. Food truck kinfolk single-origin coffee, chartreuse tumblr messenger bag cornhole affogato. Kitsch portland fam +1 tofu readymade. Meditation cornhole put a bird on it single-origin coffee roof party VHS. Lyft XOXO heirloom four dollar toast direct trade, schlitz artisan vape try-hard put a bird on it intelligentsia authentic before they sold out. Chillwave DIY activated charcoal, fashion axe listicle kombucha squid man braid quinoa taxidermy blog pabst green juice.`,

`Offal tumeric aesthetic, selvage twee unicorn marfa cornhole enamel pin portland man braid photo booth. Sustainable green juice austin, ramps disrupt hot chicken af gentrify. Hella YOLO pitchfork fam snackwave unicorn. Tilde next level vinyl DIY shaman, biodiesel swag woke you probably haven't heard of them intelligentsia 90's shoreditch meh.`
  
  ,
  
  
  
  
];
const form =document.querySelector(".lorem-form");
const amount =document.getElementById("amount");
const article=document.querySelector(".lorem-text");



form.addEventListener("submit",function(e){
  e.preventDefault();
  const value=parseInt(amount.value);
  const random=Math.floor(Math.random()*text.length);
  if(isNaN(value)||value>text.length||value<=0){
    article.innerHTML=`<p class="result">${text[random]}</p>`;
  }
  else{
    let temptext =text.slice(0,value);
    temptext=temptext.map(function(item){
      return `<p class="result">${item}</p>`;
    }).join("");
    article.innerHTML=temptext;
  }
  
  
});