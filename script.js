const input = document.querySelector('#p-name');
const searchIcon = document.querySelector('#search-icon');
const notFoundText = document.querySelector('#not-found-text');
const noData = document.querySelector('#no-data');
const infoData = document.querySelector('#data');

input.addEventListener('keydown', (e)=>{
    if(e.code == "Enter"){
        takePokeName();
    }
})

searchIcon.addEventListener('click', takePokeName);

function takePokeName(){
    const pokemonName = input.value.toLowerCase();
    input.value = '';
    pokemonData(pokemonName)
}

function pokemonData(pokemonName) {    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(res=>res.json())
    .then(data=>{    

        if(data){
            noData.style.display='none';
            infoData.style.display='block';
        }        

        //*image
        let img = document.querySelector('#pokemon-img');
        img.src = `${data.sprites.front_default}`
        
        //*name
        let pokeName = document.querySelector('#pokemon-name');
        pokeName.innerText = `${data.name}`
        
        //*type & powers
        let typeBlock=document.querySelector('#type-block');
        if(data.types[1] != undefined)
        typeBlock.innerText=`${data.types[1].type.name}`
        
        let powerBlock=document.querySelector('#power-block');
        if(data.types[0] != undefined)
        powerBlock.innerText=`${data.types[0].type.name}`
        
        //*physic info
        let pokeHeight = document.querySelector('#poke-height');
        pokeHeight.innerText=`${(data.height*0.1).toFixed(1)} M`
        
        let pokeWeight = document.querySelector('#poke-weight');
        pokeWeight.innerText=`${(data.weight*0.1).toFixed(1)} KG`
        
        //*colors
        let pokeColors = {
            fire : {'image':"#FC0C0B", powerBlock: "#F67F0B", typeBlock: "#F7B80E"},
            water : {'image':"#0A7ABC", powerBlock: "#0A7ABC", typeBlock: "#36AFF6"},
            electric : {'image':"#969101", powerBlock: "#FFFA24", typeBlock: "#F7FF85"},
            grass : {'image':"#3E9709", powerBlock: "#3E9709", typeBlock: "#67F70A"},
            bug : {'image':"#BDDD6E", powerBlock: "#BDDD6E", typeBlock: "#D9FE9E"},
            poison : {'image':"#A819D7", powerBlock: "#611380", typeBlock: "#F6E9FB"},
            ground : {'image':"#BFAC21", powerBlock: "#E1D158", typeBlock: "#EDE293"},
            fairy : {'image':"#F87EA7", powerBlock: "#FFA0C2", typeBlock: "#FDFCFD"},
            fighting: {'image': "#800B11", powerBlock: "#E81319", typeBlock: "#D36063"},
            psychic: {'image': "#8A0532", powerBlock: "#EC0E63", typeBlock: "#FCB6D0"},
            rock: {'image': "#474026", powerBlock: "#776A3E", typeBlock: "#94834F"},
            ghost: {'image': "#472B53", powerBlock: "#8E54A4", typeBlock: "#BD98CB"},
            ice: {'image': "#103D43", powerBlock: "#1995A1", typeBlock: "#66D1E5"},
            dragon: {'image': "#8852FB", powerBlock: "#8A55FD", typeBlock: "#D6B1FE"},
            flying: {'image': "#085764", powerBlock: "#5DB8B1", typeBlock: "#DCE5EA"},
            steel: {'image': "#71807E", powerBlock: "#7B8E8A", typeBlock: "#EAEEED"},
            normal: {'image': '#CECAAC', powerBlock: '#CCC9AA', typeBlock: "#F4F4EE"},
            dark: {'image': '#2D221C', powerBlock: '#5F4632', typeBlock: "#4F4F4F"}
        }        
        
        let image = document.querySelector('#image')        
        if(powerBlock.textContent === 'fire') {
            image.style.backgroundColor = pokeColors.fire.image;
            powerBlock.style.backgroundColor = pokeColors.fire.powerBlock;
        } else if(powerBlock.textContent === 'water') {
            image.style.backgroundColor = pokeColors.water.image;
            powerBlock.style.backgroundColor = pokeColors.water.powerBlock;
        } else if(powerBlock.textContent === 'electric') {
            image.style.backgroundColor = pokeColors.electric.image;
            powerBlock.style.backgroundColor = pokeColors.electric.powerBlock;
        } else if(powerBlock.textContent === 'grass') {
            image.style.backgroundColor = pokeColors.grass.image;
            powerBlock.style.backgroundColor = pokeColors.grass.powerBlock;
        } else if(powerBlock.textContent === 'bug') {
            image.style.backgroundColor = pokeColors.bug.image;
            powerBlock.style.backgroundColor = pokeColors.bug.powerBlock;
        } else if(powerBlock.textContent === 'poison') {
            image.style.backgroundColor = pokeColors.poison.image;
            powerBlock.style.backgroundColor = pokeColors.poison.backgroundColor;
        } else if(powerBlock.textContent === 'ground') {
            image.style.backgroundColor = pokeColors.ground.image;
            powerBlock.style.backgroundColor = pokeColors.ground.powerBlock;
        } else if(powerBlock.textContent === 'fairy') {
            image.style.backgroundColor = pokeColors.fairy.image
            powerBlock.style.backgroundColor = pokeColors.fairy.powerBlock;
        } else if(powerBlock.textContent === 'fighting') {
            image.style.backgroundColor = pokeColors.fighting.image
            powerBlock.style.backgroundColor = pokeColors.fighting.powerBlock;
        } else if(powerBlock.textContent === 'psychic') {
            image.style.backgroundColor = pokeColors.psychic.image
            powerBlock.style.backgroundColor = pokeColors.psychic.powerBlock;
        } else if(powerBlock.textContent === 'rock') {
            image.style.backgroundColor = pokeColors.rock.image
            powerBlock.style.backgroundColor = pokeColors.rock.powerBlock;
        } else if(powerBlock.textContent === 'ghost') {
            image.style.backgroundColor = pokeColors.ghost.image
            powerBlock.style.backgroundColor = pokeColors.ghost.powerBlock;
        } else if(powerBlock.textContent === 'ice') {
            image.style.backgroundColor = pokeColors.ice.image
            powerBlock.style.backgroundColor = pokeColors.ice.powerBlock;
        } else if(powerBlock.textContent === 'dragon') {
            image.style.backgroundColor = pokeColors.dragon.image
            powerBlock.style.backgroundColor = pokeColors.dragon.powerBlock;
        } else if(powerBlock.textContent === 'flying') {
            image.style.backgroundColor = pokeColors.flying.image
            powerBlock.style.backgroundColor = pokeColors.flying.powerBlock;
        } else if(powerBlock.textContent === 'steel') {
            image.style.backgroundColor = pokeColors.steel.image
            powerBlock.style.backgroundColor = pokeColors.steel.powerBlock;
        } else if(powerBlock.textContent === 'normal') {
            image.style.backgroundColor = pokeColors.normal.image
            powerBlock.style.backgroundColor = pokeColors.normal.powerBlock;
        } else if(powerBlock.textContent === 'dark') {
            image.style.backgroundColor = pokeColors.dark.image
            powerBlock.style.backgroundColor = pokeColors.dark.powerBlock;
        }
        
        if(typeBlock.textContent === 'fire') {
            typeBlock.style.backgroundColor = pokeColors.fire.typeBlock;
        } else if (typeBlock.textContent === 'water') {
            typeBlock.style.backgroundColor = pokeColors.water.typeBlock;   
        } else if(typeBlock.textContent === 'electric') {
            typeBlock.style.backgroundColor = pokeColors.electric.typeBlock
        } else if(typeBlock.textContent === 'grass') {
            typeBlock.style.backgroundColor = pokeColors.grass.typeBlock
        } else if(typeBlock.textContent === 'bug') {
            typeBlock.style.backgroundColor = pokeColors.bug.typeBlock
        } else if(typeBlock.textContent === 'poison') {
            typeBlock.style.backgroundColor = pokeColors.poison.typeBlock
        } else if(typeBlock.textContent === 'ground') {
            typeBlock.style.backgroundColor = pokeColors.ground.typeBlock
        } else if(typeBlock.textContent === 'fairy') {
            typeBlock.style.backgroundColor = pokeColors.fairy.typeBlock
        } else if(typeBlock.textContent === 'fighting') {
            typeBlock.style.backgroundColor = pokeColors.fighting.typeBlock
        } else if(typeBlock.textContent === 'psychic') {
            typeBlock.style.backgroundColor = pokeColors.psychic.typeBlock
        } else if(typeBlock.textContent === 'rock') {
            typeBlock.style.backgroundColor = pokeColors.rock.typeBlock
        } else if(typeBlock.textContent === 'ghost') {
            typeBlock.style.backgroundColor = pokeColors.ghost.typeBlock
        } else if(typeBlock.textContent === 'ice') {
            typeBlock.style.backgroundColor = pokeColors.ice.typeBlock
        } else if(typeBlock.textContent === 'dragon') {
            typeBlock.style.backgroundColor = pokeColors.dragon.typeBlock
        } else if(typeBlock.textContent === 'flying') {
            typeBlock.style.backgroundColor = pokeColors.flying.typeBlock
        } else if(typeBlock.textContent === 'steel') {
            typeBlock.style.backgroundColor = pokeColors.steel.typeBlock
        } else if(typeBlock.textContent === 'normal') {
            typeBlock.style.backgroundColor = pokeColors.normal.typeBlock
        } else if(typeBlock.textContent === 'dark') {
            typeBlock.style.backgroundColor = pokeColors.dark.typeBlock
        }

        let numberPokemon=document.querySelector('#poke-number');        
        if(data.id.toString().length === 3){
            numberPokemon.innerText = `#${data.id}`    
        } else if (data.id.toString().length === 2) {
            numberPokemon.innerText = `#0${data.id}`   
        } else {
            numberPokemon.innerText =`#00${data.id}`    
        }

        //*table data
        const maxPowers = 154;

        let hpData = document.querySelector('#hp-bar');
        let hpPoint = Math.floor((data.stats[0].base_stat*100)/maxPowers);
        hpData.innerText=`${hpPoint}/100`;
        hpData.style.width = `${hpPoint}%`;
        
        let atkData = document.querySelector('#atk-bar');
        let atkPoint = Math.floor((data.stats[1].base_stat*100)/maxPowers);
        atkData.innerText = `${atkPoint}/100`;
        atkData.style.width = `${atkPoint}%`

        let defData = document.querySelector('#def-bar');
        let defPoint = Math.floor((data.stats[2].base_stat*100)/maxPowers);
        defData.innerText = `${defPoint}/100`;
        defData.style.width = `${defPoint}%`;

        let satData = document.querySelector('#sat-bar');
        let satPoint = Math.floor((data.stats[3].base_stat*100)/maxPowers);
        satData.innerText = `${satPoint}/100`;
        satData.style.width = `${satPoint}%`;

        let sdeData = document.querySelector('#sde-bar');
        let expPoint = Math.floor((data.stats[4].base_stat*100)/maxPowers);
        sdeData.innerText = `${expPoint}/100`
        sdeData.style.width = `${expPoint}%`;

        let spdData = document.querySelector('#spd-bar');
        let spdPoint = Math.floor((data.stats[5].base_stat*100)/maxPowers);
        spdData.innerText = `${spdPoint}/100`;
        spdData.style.width = `${spdPoint}%`;

        
    })
    .catch(()=>{
        notFoundText.style.display = 'block';
        noData.style.display='block';
        infoData.style.display='none';        
    });
}