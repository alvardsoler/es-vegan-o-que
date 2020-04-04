// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"allAditives.json":[function(require,module,exports) {
module.exports = [{
  "code": "E100",
  "name": "Curcumina",
  "type": "vegan"
}, {
  "code": "E100ii",
  "name": "Cúrcuma",
  "type": "vegan"
}, {
  "code": "E101",
  "name": "Riboflavina (Lactoflavina) / Riboflavina",
  "type": "maybe"
}, {
  "code": "E101a",
  "name": "Fosfato de Riboflavina / Riboflavina-5-fosfato / Riboflavina- 5'- fosfato",
  "type": "maybe"
}, {
  "code": "E102",
  "name": "Tartrazina / Tartracina",
  "type": "vegan"
}, {
  "code": "E103",
  "name": "Crisoína",
  "type": "nodata"
}, {
  "code": "E104",
  "name": "Amarillo de Quinoleína / Amarillo",
  "type": "vegan"
}, {
  "code": "E105",
  "name": "Amarillo Sólido",
  "type": "nodata"
}, {
  "code": "E106",
  "name": "Fosfato de Lactoflavina / Riboflavina-5-fosfato sódico",
  "type": "maybe"
}, {
  "code": "E107",
  "name": "Amarillo 2G",
  "type": "vegan"
}, {
  "code": "E110",
  "name": "Amarillo Ocaso FCF / Amarillo",
  "type": "vegan"
}, {
  "code": "E111",
  "name": "Naranja GGN",
  "type": "nodata"
}, {
  "code": "E120",
  "name": "Ácido Carmínico / Cochinilla, / Carmín, Cochinilla",
  "type": "animal"
}, {
  "code": "E120i",
  "name": "Rojo Carmín",
  "type": "animal"
}, {
  "code": "E120ii",
  "name": "Extracto de Cochinilla",
  "type": "animal"
}, {
  "code": "E121",
  "name": "Rojo Cítrico 2",
  "type": "nodata"
}, {
  "code": "E122",
  "name": "Azorrubina (Carmoisina) / Azorrubina",
  "type": "vegan"
}, {
  "code": "E123",
  "name": "Amaranto",
  "type": "vegan"
}, {
  "code": "E124",
  "name": "Ponceau 4R / Rojo",
  "type": "vegan"
}, {
  "code": "E125",
  "name": "Ponceau SX",
  "type": "nodata"
}, {
  "code": "E126",
  "name": "Ponceau 6R",
  "type": "nodata"
}, {
  "code": "E127",
  "name": "Eritrosina",
  "type": "vegan"
}, {
  "code": "E128",
  "name": "Rojo 2G / Rojo",
  "type": "vegan"
}, {
  "code": "E129",
  "name": "Rojo Allura AC / Rojo",
  "type": "vegan"
}, {
  "code": "E130",
  "name": "Azul de Antraquinona",
  "type": "nodata"
}, {
  "code": "E131",
  "name": "Azul Patente V / Azul / Azul Patentado V",
  "type": "vegan"
}, {
  "code": "E132",
  "name": "Indigotina (Carmín Índigo) / Indigotina, / Indigotina",
  "type": "vegan"
}, {
  "code": "E133",
  "name": "Azul Brillante FCF / Azul",
  "type": "vegan"
}, {
  "code": "E140",
  "name": "Clorofilas",
  "type": "vegan"
}, {
  "code": "E140i",
  "name": "Clorofila",
  "type": "nodata"
}, {
  "code": "E140ii",
  "name": "Clorofilina",
  "type": "nodata"
}, {
  "code": "E141",
  "name": "Complejos Cúpricos de Clorofila / Complejos",
  "type": "vegan"
}, {
  "code": "E141i",
  "name": "Complejos Cúpricos de Clorofilas",
  "type": "nodata"
}, {
  "code": "E141ii",
  "name": "Complejos Cúpricos de Clorofilinas",
  "type": "nodata"
}, {
  "code": "E142",
  "name": "Verde Ácido Brillante / Verde / Verde S",
  "type": "vegan"
}, {
  "code": "E150",
  "name": "Caramelo",
  "type": "nodata"
}, {
  "code": "E150a",
  "name": "Caramelo Cáustico / Caramelo",
  "type": "vegan"
}, {
  "code": "E150a-d",
  "name": "Caramelo",
  "type": "vegan"
}, {
  "code": "E150b",
  "name": "Caramelo Cáustico de Sulfito / Caramelo",
  "type": "vegan"
}, {
  "code": "E150c",
  "name": "Caramelo Amónico / Caramelo",
  "type": "vegan"
}, {
  "code": "E150d",
  "name": "Caramelo Sulfito de Amoníaco / Caramelo",
  "type": "vegan"
}, {
  "code": "E151",
  "name": "Negro Brillante BN / Negro",
  "type": "vegan"
}, {
  "code": "E152",
  "name": "Negro 7984",
  "type": "nodata"
}, {
  "code": "E153",
  "name": "Carbón Vegetal Medicinal / Carbón",
  "type": "maybe"
}, {
  "code": "E154",
  "name": "Marrón FK / Marrón",
  "type": "vegan"
}, {
  "code": "E155",
  "name": "Marrón Chocolate HT / Marrón / Marrón HT",
  "type": "vegan"
}, {
  "code": "E160",
  "name": "Beta Caroteno",
  "type": "nodata"
}, {
  "code": "E160a",
  "name": "Carotenoides / Alfa, / Alfa-, Beta- y Gamma- caroteno",
  "type": "vegan"
}, {
  "code": "E160b",
  "name": "Annatto, Bixina, Norbixina / Bixina,",
  "type": "vegan"
}, {
  "code": "E160c",
  "name": "Extracto de Pimiento (Paprika) / Capsantina,",
  "type": "vegan"
}, {
  "code": "E160d",
  "name": "Licopeno",
  "type": "vegan"
}, {
  "code": "E160e",
  "name": "Beta Apocarotenal / Beta-apo-8'-carotenal",
  "type": "vegan"
}, {
  "code": "E160f",
  "name": "Ester Etílico Ácido Beta Apocarotenoico / Ester / Ester etílico del ácido beta-apo-8'-carotenoico",
  "type": "vegan"
}, {
  "code": "E161",
  "name": "Xantófilas / Xantofilas",
  "type": "nodata"
}, {
  "code": "E161a",
  "name": "Flavoxantina",
  "type": "vegan"
}, {
  "code": "E161b",
  "name": "Luteína",
  "type": "maybe"
}, {
  "code": "E161c",
  "name": "Criptoxantina",
  "type": "maybe"
}, {
  "code": "E161d",
  "name": "Rubixantina",
  "type": "vegan"
}, {
  "code": "E161e",
  "name": "Violaxantina / Violoxantina",
  "type": "vegan"
}, {
  "code": "E161f",
  "name": "Rodoxantina",
  "type": "maybe"
}, {
  "code": "E161g",
  "name": "Cantaxantina",
  "type": "maybe"
}, {
  "code": "E161h",
  "name": "Zeaxantina / Citranaxantina",
  "type": "vegan"
}, {
  "code": "E161j",
  "name": "Astaxantina",
  "type": "nodata"
}, {
  "code": "E162",
  "name": "Rojo Remolacha (Betanina) / Rojo / Extracto de remolacha",
  "type": "vegan"
}, {
  "code": "E163",
  "name": "Antocianinas",
  "type": "vegan"
}, {
  "code": "E163a",
  "name": "Cianidina",
  "type": "nodata"
}, {
  "code": "E163b",
  "name": "Delfinidina",
  "type": "nodata"
}, {
  "code": "E163c",
  "name": "Malvidina",
  "type": "nodata"
}, {
  "code": "E164d",
  "name": "Pelargonidina",
  "type": "nodata"
}, {
  "code": "E164e",
  "name": "Peonidina",
  "type": "nodata"
}, {
  "code": "E165f",
  "name": "Petunidina",
  "type": "nodata"
}, {
  "code": "E170",
  "name": "Carbonatos Cálcicos / Carbonato / Carbonato cálcico",
  "type": "vegan"
}, {
  "code": "E170i",
  "name": "Carbonato de Calcio",
  "type": "nodata"
}, {
  "code": "E170ii",
  "name": "Bicarbonato de Calcio",
  "type": "nodata"
}, {
  "code": "E171",
  "name": "Óxido de Titanio / Bióxido / Bióxido de titanio",
  "type": "vegan"
}, {
  "code": "E172",
  "name": "Óxido de Hierro / Óxidose / Oxidos de hierro",
  "type": "vegan"
}, {
  "code": "E173",
  "name": "Aluminio",
  "type": "vegan"
}, {
  "code": "E174",
  "name": "Plata",
  "type": "vegan"
}, {
  "code": "E175",
  "name": "Oro",
  "type": "vegan"
}, {
  "code": "E180",
  "name": "Pigmento Rubí (Litolrubina BK) / Litol-rubina / Litol -rubina BK",
  "type": "vegan"
}, {
  "code": "E181",
  "name": "Tierra Sombra Quemada / Taninos",
  "type": "vegan"
}, {
  "code": "E182",
  "name": "Orceína (Orcina, Orcilla)",
  "type": "nodata"
}, {
  "code": "E200",
  "name": "Ácido Sórbico / Ácido / Acido sórbico",
  "type": "vegan"
}, {
  "code": "E201",
  "name": "Sorbato de Sodio / Sorbato / Sorbato de sodio / Sal sódica del ácido sórbico",
  "type": "vegan"
}, {
  "code": "E202",
  "name": "Sorbato de Potasio / Sorbato",
  "type": "vegan"
}, {
  "code": "E203",
  "name": "Sorbato de Calcio / Sorbato",
  "type": "vegan"
}, {
  "code": "E210",
  "name": "Ácido Benzoico / Ácido / Acido benzoico",
  "type": "vegan"
}, {
  "code": "E211",
  "name": "Benzoato de Sodio / Benzoato / Benzoato de sodio / Sal sódica del ácido benzoico",
  "type": "vegan"
}, {
  "code": "E212",
  "name": "Benzoato de Potasio / Benzoato / Benzoato de potasio / Sal potásica del ácido benzoico",
  "type": "vegan"
}, {
  "code": "E213",
  "name": "Benzoato de Calcio / Benzoato / Benzoato de calcio / Sal cálcica del ácido benzoico",
  "type": "vegan"
}, {
  "code": "E214",
  "name": "Etil Hidroxibenzoato / Etil / Etil 4-hidroxibenzoato",
  "type": "vegan"
}, {
  "code": "E215",
  "name": "Etil Hidroxibenzoato de Sodio / Etil / Sal sódica del etil 4-hidroxibenzoato",
  "type": "vegan"
}, {
  "code": "E216",
  "name": "Propil Hidroxibenzoato / Propil / Propil 4-hidrobenzoato",
  "type": "vegan"
}, {
  "code": "E217",
  "name": "Propil Hidroxibenzoato de Sodio / Propil / Sal sódica del E216",
  "type": "vegan"
}, {
  "code": "E218",
  "name": "Metil Hidroxibenzoato / Metil / Metil 4-hidroxibenzoato",
  "type": "vegan"
}, {
  "code": "E219",
  "name": "Metil Hidroxibenzoato de Sodio / Metil / Sal sódica del E218",
  "type": "vegan"
}, {
  "code": "E220",
  "name": "Dióxido de Azufre (Sulfitos) / Anhidrido / Dióxido de azufre",
  "type": "vegan"
}, {
  "code": "E221",
  "name": "Sulfito de Sodio / Sulfito / Sulfito sódico",
  "type": "vegan"
}, {
  "code": "E222",
  "name": "Sulfito Ácido de Sodio / Sulfito / Sulfito ácido de sodio",
  "type": "vegan"
}, {
  "code": "E223",
  "name": "Metabisulfito de Sodio / Metabisulfito / Metabisulfito sódico",
  "type": "vegan"
}, {
  "code": "E224",
  "name": "Metabisulfito de Potasio / Metabisulfito / Metabisulfito potásico",
  "type": "vegan"
}, {
  "code": "E225",
  "name": "Sulfito de Potasio / Sulfito potásico",
  "type": "vegan"
}, {
  "code": "E226",
  "name": "Sulfito de Calcio / Sulfito / Sulfito cálcico",
  "type": "vegan"
}, {
  "code": "E227",
  "name": "Sulfito Ácido de Calcio / Sulfito / Sulfito ácido de calcio",
  "type": "vegan"
}, {
  "code": "E228",
  "name": "Sulfito Ácido de Potasio / Sulfito / Sulfito ácido de potasio",
  "type": "vegan"
}, {
  "code": "E230",
  "name": "Bifenilo (Difenilo) / Bifenilo / Difenilo",
  "type": "vegan"
}, {
  "code": "E231",
  "name": "Ortofenil Fenol / Ortofenilfenol / 2-hidroxidifenilo",
  "type": "vegan"
}, {
  "code": "E232",
  "name": "Ortofenil Fenolato Sódico / Ortofenilfenato / Oxido de sodio del 2-il difenilo",
  "type": "vegan"
}, {
  "code": "E233",
  "name": "Tiabendazol / Tiabenzol / 2-(Tiazol-4-il)benzimidazol",
  "type": "vegan"
}, {
  "code": "E234",
  "name": "Nisina",
  "type": "vegan"
}, {
  "code": "E235",
  "name": "Natamicina (Pimaricina) / Natamicina / Pimaracina",
  "type": "vegan"
}, {
  "code": "E236",
  "name": "Ácido Fórmico (Metanoico) / Ácido / Acido fórmico",
  "type": "vegan"
}, {
  "code": "E237",
  "name": "Formiato de Sodio / Formiato / Formato sódico",
  "type": "vegan"
}, {
  "code": "E238",
  "name": "Formiato de Calcio / Formiato / Formato cálcico",
  "type": "vegan"
}, {
  "code": "E239",
  "name": "Hexametil Entetramina (Hexamina) / Hexametilen / Hexamina",
  "type": "vegan"
}, {
  "code": "E240",
  "name": "Formaldehído (Formol, Formalina) / Formaldehído",
  "type": "vegan"
}, {
  "code": "E242",
  "name": "Dimetil Dicarbonato / Dimetil / Dimetilcarbonato",
  "type": "vegan"
}, {
  "code": "E243",
  "name": "Etil Lauroil Arginato / Etil",
  "type": "nodata"
}, {
  "code": "E249",
  "name": "Nitrito de Potasio / Nitrito / Nitrito potásico",
  "type": "vegan"
}, {
  "code": "E250",
  "name": "Nitrito de Sodio / Nitrito / Nitrito sódico",
  "type": "vegan"
}, {
  "code": "E251",
  "name": "Nitrato de Sodio / Nitrato / Nitrato sódico",
  "type": "vegan"
}, {
  "code": "E252",
  "name": "Nitrato de Potasio / Nitrato / Nitrato potásico",
  "type": "vegan"
}, {
  "code": "E260",
  "name": "Ácido Acético / Ácido / Acido acético",
  "type": "vegan"
}, {
  "code": "E261",
  "name": "Acetato de Potasio / Acetato",
  "type": "vegan"
}, {
  "code": "E262",
  "name": "Acetato de Sodio",
  "type": "vegan"
}, {
  "code": "E262i",
  "name": "Diacetato / Acetato",
  "type": "nodata"
}, {
  "code": "E263",
  "name": "Acetato de Calcio / Acetato",
  "type": "vegan"
}, {
  "code": "E264",
  "name": "Acetato de Amonio",
  "type": "nodata"
}, {
  "code": "E270",
  "name": "Ácido Láctico / Ácido / Acido láctico",
  "type": "vegan"
}, {
  "code": "E280",
  "name": "Ácido Propiónico / Ácido / Acido propiónico",
  "type": "vegan"
}, {
  "code": "E281",
  "name": "Propionato de Sodio / Propionato / Propionato sódico",
  "type": "vegan"
}, {
  "code": "E282",
  "name": "Propionato de Calcio / Propionato / Propionato cálcico",
  "type": "vegan"
}, {
  "code": "E283",
  "name": "Propionato de Potasio / Propionato / Propionato potásico",
  "type": "vegan"
}, {
  "code": "E284",
  "name": "Ácido Bórico / Ácido / Acido bórico",
  "type": "vegan"
}, {
  "code": "E285",
  "name": "Tetraborato de Sodio (Bórax) / Tetraborato / Tetraborato sódico",
  "type": "vegan"
}, {
  "code": "E290",
  "name": "Dióxido de Carbono / Anhídrido",
  "type": "vegan"
}, {
  "code": "E296",
  "name": "Ácido Málico / Ácido / Acido málico",
  "type": "vegan"
}, {
  "code": "E297",
  "name": "Ácido Fumárico / Ácido / Acido fumárico",
  "type": "vegan"
}, {
  "code": "E300",
  "name": "Ácido Ascórbico / Ácido / L- ácido ascórbico",
  "type": "vegan"
}, {
  "code": "E301",
  "name": "Ascorbato de Sodio / Ascorbato / L- ascorbato sódico",
  "type": "vegan"
}, {
  "code": "E302",
  "name": "Ascorbato de Calcio / Ascorbato / L - ascorbato cálcico",
  "type": "vegan"
}, {
  "code": "E303",
  "name": "Ascorbato de Potasio",
  "type": "nodata"
}, {
  "code": "E304",
  "name": "Palmitato Ascorbilo / L - palmitato de ascorbilo",
  "type": "maybe"
}, {
  "code": "E304i",
  "name": "/ Estearato",
  "type": "nodata"
}, {
  "code": "E305",
  "name": "Estearato Ascorbilo",
  "type": "nodata"
}, {
  "code": "E306",
  "name": "Extractos Naturales Ricos en Tocoferol / Extractos / Extractos de tocoferoles",
  "type": "vegan"
}, {
  "code": "E307",
  "name": "Alfa Tocoferol / Alfa / alfa- Tocoferol",
  "type": "vegan"
}, {
  "code": "E308",
  "name": "Gama Tocoferol / Gamma / gamma-Tocoferol",
  "type": "vegan"
}, {
  "code": "E309",
  "name": "Delta Tocoferol / Delta / delta- Tocoferol",
  "type": "vegan"
}, {
  "code": "E310",
  "name": "Galato de Propilo / Galato",
  "type": "vegan"
}, {
  "code": "E311",
  "name": "Galato de Octilo / Galato",
  "type": "vegan"
}, {
  "code": "E312",
  "name": "Galato de Dodecilo / Galato",
  "type": "maybe"
}, {
  "code": "E313",
  "name": "Ácido tiodipropionico",
  "type": "vegan"
}, {
  "code": "E314",
  "name": "Goma guayaco",
  "type": "vegan"
}, {
  "code": "E315",
  "name": "Ácido Eritórbico / Ácido / Ácido eritorbico",
  "type": "vegan"
}, {
  "code": "E316",
  "name": "Eritorbato Sódico / Eritorbato",
  "type": "vegan"
}, {
  "code": "E319",
  "name": "Butil Hidroquinona (BHQ) / Butilhidroquinona",
  "type": "vegan"
}, {
  "code": "E320",
  "name": "Butil Hidroxianisol (BHA) / Butilhidroxianisol, / Butilhidroxianisol",
  "type": "vegan"
}, {
  "code": "E321",
  "name": "Butil Hidroxitolueno (BHT) / Butilhidroxitolueno, / Butilhidroxitolueno",
  "type": "vegan"
}, {
  "code": "E322",
  "name": "Lecitina / Lecitinas",
  "type": "maybe"
}, {
  "code": "E325",
  "name": "Lactato de Sodio / Lactato / Lactato sódico",
  "type": "vegan"
}, {
  "code": "E326",
  "name": "Lactato de Potasio / Lactato / Lactato potásico",
  "type": "vegan"
}, {
  "code": "E327",
  "name": "Lactato de Calcio / Lactato / Lactato cálcico",
  "type": "vegan"
}, {
  "code": "E328",
  "name": "Lactato de Amonio",
  "type": "nodata"
}, {
  "code": "E329",
  "name": "Lactato de Magnesio",
  "type": "nodata"
}, {
  "code": "E330",
  "name": "Ácido Cítrico / Ácido",
  "type": "vegan"
}, {
  "code": "E331",
  "name": "Citratos de Sodio / Citratos",
  "type": "vegan"
}, {
  "code": "E332",
  "name": "Citratos de Potasio / Citratos",
  "type": "vegan"
}, {
  "code": "E333",
  "name": "Citratos de Calcio / Citratos / Citratos de Mono, di, y Tri-cálcico",
  "type": "vegan"
}, {
  "code": "E334",
  "name": "Ácido Tartárico / Ácido / Ácido L-(+)- tartárico",
  "type": "vegan"
}, {
  "code": "E335",
  "name": "Tartrato de Sodio / Tartratos / Tartratos L-(+) mono/di sódico",
  "type": "vegan"
}, {
  "code": "E336",
  "name": "Tartrato de Potasio / Tartratos / Tartratos L-(+) mono potásico",
  "type": "vegan"
}, {
  "code": "E337",
  "name": "Tartrato Doble de Sodio y Potasio / Tartrato / Tartrato L-(+) doble de sodio y potasio",
  "type": "vegan"
}, {
  "code": "E338",
  "name": "Ácido Ortofosfórico / Ácido / Ácido fosfórico",
  "type": "vegan"
}, {
  "code": "E339",
  "name": "Ortofosfatos de Sodio / Ortofosfatos",
  "type": "vegan"
}, {
  "code": "E339i",
  "name": "Ortofosfato Monosódico",
  "type": "nodata"
}, {
  "code": "E339ii",
  "name": "Ortofosfato Disódico",
  "type": "nodata"
}, {
  "code": "E339iii",
  "name": "Ortofosfato Trisódico",
  "type": "nodata"
}, {
  "code": "E340",
  "name": "Ortofosfatos de Potasio / Ortofosfatos",
  "type": "vegan"
}, {
  "code": "E340i",
  "name": "Ortofosfato Monopotásico",
  "type": "nodata"
}, {
  "code": "E340ii",
  "name": "Ortofosfato Dipotásico",
  "type": "nodata"
}, {
  "code": "E340iii",
  "name": "Ortofosfato Tripotásico",
  "type": "nodata"
}, {
  "code": "E341",
  "name": "Ortofosfatos de Calcio / Ortofosfatos",
  "type": "vegan"
}, {
  "code": "E341i",
  "name": "Ortofosfato Monocálcico",
  "type": "nodata"
}, {
  "code": "E341ii",
  "name": "Ortofosfato Dicálcico",
  "type": "nodata"
}, {
  "code": "E341iii",
  "name": "Ortofosfato Tricálcico",
  "type": "nodata"
}, {
  "code": "E342",
  "name": "Ortofosfatos de Amonio",
  "type": "nodata"
}, {
  "code": "E342i",
  "name": "Ortofosfato Monoamónico",
  "type": "nodata"
}, {
  "code": "E342ii",
  "name": "Ortofosfato Diamónico",
  "type": "nodata"
}, {
  "code": "E342iii",
  "name": "Ortofosfato Triamónico",
  "type": "nodata"
}, {
  "code": "E343",
  "name": "Ortofosfatos de Magnesio / Ortofosfatos",
  "type": "vegan"
}, {
  "code": "E343i",
  "name": "Ortofosfato Monomagnésico",
  "type": "nodata"
}, {
  "code": "E343ii",
  "name": "Ortofosfato Dimagnésico",
  "type": "nodata"
}, {
  "code": "E343iii",
  "name": "Ortofosfato Trimagnésico",
  "type": "nodata"
}, {
  "code": "E349",
  "name": "Malatos de Amonio",
  "type": "nodata"
}, {
  "code": "E349i",
  "name": "Malato de Amonio",
  "type": "nodata"
}, {
  "code": "E349ii",
  "name": "Malato Ácido de Amonio",
  "type": "nodata"
}, {
  "code": "E350",
  "name": "Malatos de Sodio / Malato sódico",
  "type": "vegan"
}, {
  "code": "E350i",
  "name": "Malato de Sodio / Malato",
  "type": "nodata"
}, {
  "code": "E350ii",
  "name": "Malato Ácido de Sodio / Malato",
  "type": "nodata"
}, {
  "code": "E351",
  "name": "Malatos de Potasio / Malatos / Malato de potasio",
  "type": "vegan"
}, {
  "code": "E351i",
  "name": "Malato de Potasio",
  "type": "nodata"
}, {
  "code": "E351ii",
  "name": "Malato Ácido de Potasio",
  "type": "nodata"
}, {
  "code": "E352",
  "name": "Malatos de Calcio / Malatos / Malato de calcio",
  "type": "vegan"
}, {
  "code": "E352i",
  "name": "Malato de Calcio / Malato",
  "type": "nodata"
}, {
  "code": "E352ii",
  "name": "Malato Ácido de Calcio / Malato",
  "type": "nodata"
}, {
  "code": "E353",
  "name": "Ácido Metatartárico / Ácido",
  "type": "vegan"
}, {
  "code": "E354",
  "name": "Tartrato de Calcio / Tartrato / Tartrato cálcico",
  "type": "vegan"
}, {
  "code": "E355",
  "name": "Ácido Adípico / Ácido / Acido ad ípico",
  "type": "vegan"
}, {
  "code": "E356",
  "name": "Adipato de Sodio",
  "type": "vegan"
}, {
  "code": "E357",
  "name": "Adipato de Potasio / Adipato / Adipato potásico",
  "type": "vegan"
}, {
  "code": "E363",
  "name": "Ácido Succínico / Ácido",
  "type": "vegan"
}, {
  "code": "E364",
  "name": "Fumarato de Magnesio",
  "type": "nodata"
}, {
  "code": "E365",
  "name": "Fumarato de Sodio",
  "type": "vegan"
}, {
  "code": "E366",
  "name": "Fumarato de Potasio",
  "type": "nodata"
}, {
  "code": "E367",
  "name": "Fumarato de Calcio",
  "type": "nodata"
}, {
  "code": "E368",
  "name": "Fumarato de Amonio",
  "type": "nodata"
}, {
  "code": "E370",
  "name": "Heptonolactona / 1,4-Heptonolactona",
  "type": "vegan"
}, {
  "code": "E372c",
  "name": "Ester",
  "type": "nodata"
}, {
  "code": "E375",
  "name": "Ácido Nicotínico (Niacina) / Ácido / Ácido nicotínico",
  "type": "vegan"
}, {
  "code": "E380",
  "name": "Citrato Triamónico / Citrato",
  "type": "vegan"
}, {
  "code": "E381",
  "name": "Citrato Férrico de Amonio",
  "type": "vegan"
}, {
  "code": "E385",
  "name": "Etileno Diamina Tetra Acetato (EDTA) / Etilenodiamino / Etilen diamino de calcio y sodio",
  "type": "vegan"
}, {
  "code": "E386",
  "name": "Ácido Etileno Diamino Tetraacético (AEDT) / EDTA: Etilen diamino tetracetato disódico",
  "type": "vegan"
}, {
  "code": "E387",
  "name": "Oxiestearina",
  "type": "maybe"
}, {
  "code": "E388",
  "name": "Ácido tiodipropionico",
  "type": "vegan"
}, {
  "code": "E392",
  "name": "Extracto de Romero",
  "type": "nodata"
}, {
  "code": "E400",
  "name": "Ácido Algínico / Ácido",
  "type": "vegan"
}, {
  "code": "E401",
  "name": "Alginato de Sodio / Alginato / Alginato sódico",
  "type": "vegan"
}, {
  "code": "E402",
  "name": "Alginato de Potasio / Alginato / Alginato potásico",
  "type": "vegan"
}, {
  "code": "E403",
  "name": "Alginato de Amonio / Alginato / Alginato amónico",
  "type": "vegan"
}, {
  "code": "E404",
  "name": "Alginato de Calcio / Alginato / Alginato cálcico (algin)",
  "type": "vegan"
}, {
  "code": "E405",
  "name": "Alginato de Propilenglicol / Alginato / Alginato de propano-1,2-diol",
  "type": "vegan"
}, {
  "code": "E406",
  "name": "Agar-Agar",
  "type": "vegan"
}, {
  "code": "E407",
  "name": "Carragenanos",
  "type": "vegan"
}, {
  "code": "E407a",
  "name": "Algas Eucheuma",
  "type": "nodata"
}, {
  "code": "E408",
  "name": "Furcelleran",
  "type": "vegan"
}, {
  "code": "E410",
  "name": "Goma Garrofín (Algarrobo) / Goma / Goma de algarrobo",
  "type": "vegan"
}, {
  "code": "E411",
  "name": "Goma de avena",
  "type": "vegan"
}, {
  "code": "E412",
  "name": "Goma Guar / Goma",
  "type": "vegan"
}, {
  "code": "E413",
  "name": "Goma Tragacanto (Aldragante) / Goma / Tragacanto",
  "type": "vegan"
}, {
  "code": "E414",
  "name": "Goma Arábiga / Goma / Goma arábica",
  "type": "vegan"
}, {
  "code": "E415",
  "name": "Goma Xantana / Goma",
  "type": "vegan"
}, {
  "code": "E416",
  "name": "Goma Karaya / Goma",
  "type": "vegan"
}, {
  "code": "E417",
  "name": "Goma Tara / Goma",
  "type": "nodata"
}, {
  "code": "E418",
  "name": "Goma Gellan / Goma",
  "type": "vegan"
}, {
  "code": "E420",
  "name": "Sorbitol",
  "type": "vegan"
}, {
  "code": "E420i",
  "name": "Jarabe",
  "type": "nodata"
}, {
  "code": "E420ii",
  "name": "Sorbitol",
  "type": "nodata"
}, {
  "code": "E421",
  "name": "Manitol",
  "type": "vegan"
}, {
  "code": "E422",
  "name": "Glicerol",
  "type": "vegan"
}, {
  "code": "E425",
  "name": "Goma Konjac (Glucomanano)",
  "type": "nodata"
}, {
  "code": "E426",
  "name": "Hemicelulosa de Soja",
  "type": "nodata"
}, {
  "code": "E427",
  "name": "Goma Cassia",
  "type": "nodata"
}, {
  "code": "E430",
  "name": "Estearato Polioxietileno 8 / Estearato / Estearato de (8) polioxietileno",
  "type": "maybe"
}, {
  "code": "E431",
  "name": "Estearato Polioxietileno 40 / Estearato / Estearato de polioxietileno",
  "type": "maybe"
}, {
  "code": "E432",
  "name": "Monolaurato Polioxietilenado (Polisorbato 20) / Monolaurato / Sorbinato de (20) polioxietileno, Polisorbato 20",
  "type": "maybe"
}, {
  "code": "E433",
  "name": "Monooleato Polioxietilenado (Polisorbato 80) / Monooleato / Polisorbato 80",
  "type": "maybe"
}, {
  "code": "E434",
  "name": "Monopalmitato Polioxietilenado (Polisorbato 40) / Monopalmitato / Polisorbato 40",
  "type": "maybe"
}, {
  "code": "E435",
  "name": "Monoestearato Polioxietilenado (Polisorbato 60) / Monoestearato / Polisorbato 60",
  "type": "maybe"
}, {
  "code": "E436",
  "name": "Triestearato Polioxietilenado (Polisorbato 65) / Triestearato / Polisorbato 65",
  "type": "maybe"
}, {
  "code": "E440",
  "name": "Pectina",
  "type": "vegan"
}, {
  "code": "E440a",
  "name": "Pectinas",
  "type": "nodata"
}, {
  "code": "E440b",
  "name": "Pectinas Amidadas",
  "type": "nodata"
}, {
  "code": "E440i",
  "name": "Pectina",
  "type": "nodata"
}, {
  "code": "E440ii",
  "name": "Pectina",
  "type": "nodata"
}, {
  "code": "E441",
  "name": "Gelatina (VER VÍDEO) / Gelatina",
  "type": "animal"
}, {
  "code": "E442",
  "name": "Fosfátidos de Amonio / Fosfatidos",
  "type": "maybe"
}, {
  "code": "E444",
  "name": "Acetato Isobutirato de Sacarosa / Acetatoisobutirato",
  "type": "nodata"
}, {
  "code": "E445",
  "name": "Ésteres Glicéridos Colofonia de Madera / Esteres",
  "type": "nodata"
}, {
  "code": "E445i",
  "name": "Abietato de Glicerilo",
  "type": "nodata"
}, {
  "code": "E445ii",
  "name": "Goma Éster",
  "type": "nodata"
}, {
  "code": "E450",
  "name": "Difosfatos / Di- y trifosfatos",
  "type": "vegan"
}, {
  "code": "E450i",
  "name": "Difosfato Disódico / Difosfato",
  "type": "nodata"
}, {
  "code": "E450ii",
  "name": "Difosfato Trisódico / Difosfato",
  "type": "nodata"
}, {
  "code": "E450iii",
  "name": "Difosfato Tetrasódico / Difosfato",
  "type": "nodata"
}, {
  "code": "E450iv",
  "name": "Difosfato Dipotásico / Difosfato",
  "type": "nodata"
}, {
  "code": "E450ix",
  "name": "Difosfato Magnésico de Dihidrógeno",
  "type": "nodata"
}, {
  "code": "E450v",
  "name": "Difosfato Tetrapotásico / Difosfato",
  "type": "nodata"
}, {
  "code": "E450vi",
  "name": "Difosfato Dicálcico / Difosfato",
  "type": "nodata"
}, {
  "code": "E450vii",
  "name": "Difosfato Ácido de Calcio / Difosfato",
  "type": "nodata"
}, {
  "code": "E451",
  "name": "Trifosfatos / Trifosfato Pentapotásico",
  "type": "vegan"
}, {
  "code": "E451i",
  "name": "Trifosfato Pentasódico / Trifosfato",
  "type": "nodata"
}, {
  "code": "E451ii",
  "name": "Trifosfato",
  "type": "nodata"
}, {
  "code": "E452",
  "name": "Polifosfatos",
  "type": "vegan"
}, {
  "code": "E452i",
  "name": "Polifosfato de Sodio",
  "type": "nodata"
}, {
  "code": "E452ii",
  "name": "Polifosfato de Potasio",
  "type": "nodata"
}, {
  "code": "E452iii",
  "name": "Polifosfato de Sodio y Calcio / Polifosfato",
  "type": "nodata"
}, {
  "code": "E452iv",
  "name": "Polifosfato de Calcio / Polifosfato",
  "type": "nodata"
}, {
  "code": "E452v",
  "name": "Polifosfato de Amonio / Polifosfato",
  "type": "nodata"
}, {
  "code": "E452vi",
  "name": "Polifosfato",
  "type": "nodata"
}, {
  "code": "E459",
  "name": "Beta Ciclodextrina",
  "type": "nodata"
}, {
  "code": "E460",
  "name": "Celulosa Microcristalina / Celulosa",
  "type": "vegan"
}, {
  "code": "E460i",
  "name": "Celulosa",
  "type": "nodata"
}, {
  "code": "E460ii",
  "name": "Celulosa",
  "type": "nodata"
}, {
  "code": "E461",
  "name": "Metilcelulosa",
  "type": "vegan"
}, {
  "code": "E462",
  "name": "Etilcelulosa",
  "type": "vegan"
}, {
  "code": "E463",
  "name": "Hidroxipropil Celulosa / Hidroxipropilcelulosa",
  "type": "vegan"
}, {
  "code": "E464",
  "name": "Hidroxipropil Metilcelulosa / Hidroxipropilmetilcelulosa",
  "type": "vegan"
}, {
  "code": "E465",
  "name": "Etilmetil Celulosa / Metilcelulosa / Etilmetilcelulosa",
  "type": "vegan"
}, {
  "code": "E466",
  "name": "Carboximetil Celulosa de sodio / Carboximetilcelulosa",
  "type": "vegan"
}, {
  "code": "E467",
  "name": "Etilhidroxietil Celulosa",
  "type": "nodata"
}, {
  "code": "E468",
  "name": "Carboximetil Celulosa de Sodio Reticulada",
  "type": "nodata"
}, {
  "code": "E469",
  "name": "Carboximetil Celulosa de Sodio Hidrolizada",
  "type": "nodata"
}, {
  "code": "E470",
  "name": "Sales de los Ácidos Grasos / Sales de ácidos grasos",
  "type": "maybe"
}, {
  "code": "E470a",
  "name": "Sales de Sodio, Potasio y Calcio de los Ácidos Grasos / Sales",
  "type": "nodata"
}, {
  "code": "E470b",
  "name": "Sales de Magnesio de los Ácidos Grasos / Sales",
  "type": "nodata"
}, {
  "code": "E471",
  "name": "Mono y Diglicéridos de los Ácidos Grasos / Mono / Mono- y diglicéridos de ácidos grasos",
  "type": "maybe"
}, {
  "code": "E472",
  "name": "Ésteres de los Mono y Diglicéridos de los Ácidos Grasos / Esteres de los mono y diglicéridos de ácidos grasos",
  "type": "maybe"
}, {
  "code": "E472a",
  "name": "Ésteres Acéticos de los Mono y Diglicéridos de los Ácidos Grasos / Esteres",
  "type": "nodata"
}, {
  "code": "E472b",
  "name": "Ésteres Lácticos de los Mono y Diglicéridos de los Ácidos Grasos / Esteres",
  "type": "nodata"
}, {
  "code": "E472c",
  "name": "Ésteres Cítricos de los Mono y Diglicéridos de los Ácidos Grasos / Esteres",
  "type": "nodata"
}, {
  "code": "E472d",
  "name": "Ésteres Tartáricos de los Mono y Diglicéridos de los Ácidos Grasos / Esteres",
  "type": "nodata"
}, {
  "code": "E472e",
  "name": "Ésteres Monoacetiltartárico y Diacetiltartárico de los Mono y Diglicéridos de los Ácidos Grasos / Esteres",
  "type": "nodata"
}, {
  "code": "E472f",
  "name": "Ésteres Mixtos Acéticos y Tartáricos de los Mono y Diglicéridos de los Ácidos Grasos / Esteres",
  "type": "nodata"
}, {
  "code": "E473",
  "name": "Sucroésteres de los Ácidos Grasos / Sucroésteres / Sucroésteres de ácidos grasos",
  "type": "maybe"
}, {
  "code": "E474",
  "name": "Sucroglicéridos de los Ácidos Grasos / Sucroglicéridos",
  "type": "maybe"
}, {
  "code": "E475",
  "name": "Ésteres Poliglicéridos de los Ácidos Grasos / Esteres / Ésteres poliglicéridos de ácidos grasos",
  "type": "maybe"
}, {
  "code": "E476",
  "name": "Polirricinoleato de Poliglicerol / Polirricinoleato / Esteres de poliglicerol de los ácidos grasos policondensados del aceite de ricino",
  "type": "vegan"
}, {
  "code": "E477",
  "name": "Ésteres de Propilenglicol de los Ácidos Grasos / Esteres / Ésteres de propano-1,2 -diol de ácidos grasos",
  "type": "maybe"
}, {
  "code": "E478",
  "name": "Esteres / Esteres de ácidos grasos lactilados de glicerol y de propano-1,2-diol",
  "type": "maybe"
}, {
  "code": "E479",
  "name": "Aceite de soja esterificado",
  "type": "maybe"
}, {
  "code": "E479b",
  "name": "Aceite de Soja Oxidado / Aceite",
  "type": "nodata"
}, {
  "code": "E480",
  "name": "Dioctil Sulfosuccinato de Sodio / Ácido / Dioctyl sodium sulphosuccinate",
  "type": "vegan"
}, {
  "code": "E481",
  "name": "Estearoil-2-Lactilato Sódico / Estearoil-2-lactilato / Estearoil-2-lactilato de sodio",
  "type": "maybe"
}, {
  "code": "E482",
  "name": "Estearoil-2-Lactilato Cálcico / Estearoil-2-lactilato / Estearoil-2-lactilato de calcio",
  "type": "maybe"
}, {
  "code": "E483",
  "name": "Tartrato de Estearilo / Tartrato",
  "type": "maybe"
}, {
  "code": "E484",
  "name": "Estearilcitrato",
  "type": "maybe"
}, {
  "code": "E490",
  "name": "Propilenglicol",
  "type": "vegan"
}, {
  "code": "E491",
  "name": "Monoestearato de Sorbitán / Monoestearato / Monoestearato de sorbinato",
  "type": "maybe"
}, {
  "code": "E492",
  "name": "Triestearato de Sorbitán / Triestearato / Triestearato de sorbinato",
  "type": "maybe"
}, {
  "code": "E493",
  "name": "Monolaurato de Sorbitán / Monolaurato / Monolaurato de sorbinato",
  "type": "maybe"
}, {
  "code": "E494",
  "name": "Monooleato de Sorbitán / Monooleato / Monooleato de sorbinato",
  "type": "maybe"
}, {
  "code": "E495",
  "name": "Monopalmitato de Sorbitán / Monopalmitato / Monopalmitato de sorbinato",
  "type": "maybe"
}, {
  "code": "E499",
  "name": "Fitoesteroles Ricos en Estigmasterol",
  "type": "nodata"
}, {
  "code": "E500",
  "name": "Carbonatos de Sodio / Carbonatos / Carbonato de sodio",
  "type": "vegan"
}, {
  "code": "E500i",
  "name": "Carbonato de Sodio / Carbonato",
  "type": "nodata"
}, {
  "code": "E500ii",
  "name": "Carbonato Ácido de Sodio / Carbonato",
  "type": "nodata"
}, {
  "code": "E500iii",
  "name": "Sesquicarbonato",
  "type": "nodata"
}, {
  "code": "E501",
  "name": "Carbonatos de Potasio / Carbonatos / Carbonato de potasio",
  "type": "vegan"
}, {
  "code": "E501i",
  "name": "Carbonato de Potasio / Carbonato",
  "type": "nodata"
}, {
  "code": "E501ii",
  "name": "Carbonato Ácido de Potasio / Carbonato",
  "type": "nodata"
}, {
  "code": "E503",
  "name": "Carbonatos de Amonio / Carbonatos / Carbonato de amonio",
  "type": "vegan"
}, {
  "code": "E503i",
  "name": "Carbonato de Amonio / Carbonato",
  "type": "nodata"
}, {
  "code": "E503ii",
  "name": "Carbonato Ácido de Amonio / Carbonato",
  "type": "nodata"
}, {
  "code": "E504",
  "name": "Carbonatos de Magnesio / Carbonato / Carbonato de magnesio",
  "type": "vegan"
}, {
  "code": "E504i",
  "name": "Carbonato de Magnesio",
  "type": "nodata"
}, {
  "code": "E504ii",
  "name": "Carbonato Ácido de Magnesio",
  "type": "nodata"
}, {
  "code": "E505",
  "name": "Carbonato férrico",
  "type": "vegan"
}, {
  "code": "E507",
  "name": "Ácido Clorhídrico / Ácido / Acido clorhídrico",
  "type": "vegan"
}, {
  "code": "E508",
  "name": "Cloruro de Potasio / Cloruro",
  "type": "vegan"
}, {
  "code": "E509",
  "name": "Cloruro de Calcio / Cloruro",
  "type": "vegan"
}, {
  "code": "E510",
  "name": "Cloruro de Amonio",
  "type": "vegan"
}, {
  "code": "E511",
  "name": "Cloruro de Magnesio / Cloruro",
  "type": "vegan"
}, {
  "code": "E512",
  "name": "Cloruro de Estaño / Cloruro",
  "type": "vegan"
}, {
  "code": "E513",
  "name": "Ácido Sulfúrico / Ácido / Acido sulfúrico",
  "type": "vegan"
}, {
  "code": "E514",
  "name": "Sulfatos de Sodio / Sulfato / Sulfato de sodio",
  "type": "vegan"
}, {
  "code": "E514i",
  "name": "Sulfato de Sodio",
  "type": "nodata"
}, {
  "code": "E514ii",
  "name": "Sulfato Ácido de Sodio",
  "type": "nodata"
}, {
  "code": "E515",
  "name": "Sulfato de potasio",
  "type": "vegan"
}, {
  "code": "E515i",
  "name": "Sulfato",
  "type": "nodata"
}, {
  "code": "E515ii",
  "name": "Sulfato",
  "type": "nodata"
}, {
  "code": "E516",
  "name": "Sulfatos de Calcio / Sulfato / Sulfato de calcio",
  "type": "vegan"
}, {
  "code": "E516i",
  "name": "Sulfato de Calcio",
  "type": "nodata"
}, {
  "code": "E516ii",
  "name": "Sulfato Ácido de Calcio",
  "type": "nodata"
}, {
  "code": "E517",
  "name": "Sulfatos de Amonio / Sulfato / Sulfato de amonio",
  "type": "vegan"
}, {
  "code": "E517i",
  "name": "Sulfato de Amonio",
  "type": "nodata"
}, {
  "code": "E517ii",
  "name": "Sulfato Ácido de Amonio",
  "type": "nodata"
}, {
  "code": "E518",
  "name": "Sulfatos de Magnesio / Sulfato de magnesio",
  "type": "vegan"
}, {
  "code": "E518i",
  "name": "Sulfato de Magnesio",
  "type": "nodata"
}, {
  "code": "E518ii",
  "name": "Sulfato Ácido de Magnesio",
  "type": "nodata"
}, {
  "code": "E519",
  "name": "Sulfatos de Cobre",
  "type": "nodata"
}, {
  "code": "E519i",
  "name": "Sulfato de Cobre",
  "type": "nodata"
}, {
  "code": "E519ii",
  "name": "Sulfato Ácido de Cobre",
  "type": "nodata"
}, {
  "code": "E520",
  "name": "Sulfato de Aluminio / Sulfato",
  "type": "vegan"
}, {
  "code": "E521",
  "name": "Sulfato Sódico de Aluminio / Sulfato",
  "type": "vegan"
}, {
  "code": "E522",
  "name": "Sulfato Potásico de Aluminio / Sulfato",
  "type": "nodata"
}, {
  "code": "E523",
  "name": "Sulfato Amónico de Aluminio / Sulfato",
  "type": "vegan"
}, {
  "code": "E524",
  "name": "Hidróxido de Sodio / Hidróxido",
  "type": "vegan"
}, {
  "code": "E525",
  "name": "Hidróxido de Potasio / Hidroxido",
  "type": "vegan"
}, {
  "code": "E526",
  "name": "Hidróxido de Calcio / Hidróxido",
  "type": "vegan"
}, {
  "code": "E527",
  "name": "Hidróxido de Amonio / Hidróxido",
  "type": "vegan"
}, {
  "code": "E528",
  "name": "Hidróxido de Magnesio / Hidróxido",
  "type": "vegan"
}, {
  "code": "E529",
  "name": "Óxido de Calcio / Óxido / Oxido de calcio",
  "type": "vegan"
}, {
  "code": "E530",
  "name": "Óxido de Magnesio / Óxido / Oxido de magnesio",
  "type": "vegan"
}, {
  "code": "E535",
  "name": "Ferrocianuro de Sodio / Ferrocianuro",
  "type": "vegan"
}, {
  "code": "E536",
  "name": "Ferrocianuro de Potasio / Ferrocianuro",
  "type": "vegan"
}, {
  "code": "E537",
  "name": "Ferrocianuro de Magnesio / Hexacianomanganato de fierro",
  "type": "vegan"
}, {
  "code": "E538",
  "name": "Ferrocianuro de Calcio / Ferrocianuro",
  "type": "vegan"
}, {
  "code": "E539",
  "name": "Tiosulfato de sodio",
  "type": "vegan"
}, {
  "code": "E540",
  "name": "Pirofosfato Dicálcico / Pirofosfato dicálcico (->E450)",
  "type": "vegan"
}, {
  "code": "E541",
  "name": "Fosfato Ácido de Sodio y Aluminio / Fosfato sódico de aluminio",
  "type": "vegan"
}, {
  "code": "E541i",
  "name": "Fosfato",
  "type": "nodata"
}, {
  "code": "E542",
  "name": "Fosfato de Huesos / Fosfato comestible extraído de los huesos",
  "type": "animal"
}, {
  "code": "E543",
  "name": "Pirofosfato de Sodio y Calcio / Polifosfato sódico de calcio",
  "type": "vegan"
}, {
  "code": "E544",
  "name": "Pirofosfato de Calcio / Polifosfatos de calcio",
  "type": "vegan"
}, {
  "code": "E545",
  "name": "Pirofosfato de Amonio / Polifosfatos de amonio",
  "type": "vegan"
}, {
  "code": "E546",
  "name": "Pirofosfato de Magnesio",
  "type": "vegan"
}, {
  "code": "E550",
  "name": "Silicatos de sodio",
  "type": "vegan"
}, {
  "code": "E551",
  "name": "Óxido de Silicio / Óxido / Dióxido de silicona",
  "type": "vegan"
}, {
  "code": "E552",
  "name": "Silicato de Calcio / Silicato",
  "type": "vegan"
}, {
  "code": "E553",
  "name": "Silicato de magnesio",
  "type": "vegan"
}, {
  "code": "E553a",
  "name": "Silicato de Magnesio / Trisilicato / Silicato",
  "type": "nodata"
}, {
  "code": "E553b",
  "name": "Talco",
  "type": "nodata"
}, {
  "code": "E554",
  "name": "Silicato de Sodio y Aluminio / Silicato / Silicato sódico de aluminio",
  "type": "vegan"
}, {
  "code": "E555",
  "name": "Silicato de Potasio y Aluminio / Silicato / Silicato potásico de aluminio",
  "type": "vegan"
}, {
  "code": "E556",
  "name": "Silicato de Calcio y Aluminio / Silicato / Silicato cálcico de aluminio",
  "type": "vegan"
}, {
  "code": "E557",
  "name": "Silicato de zinc",
  "type": "vegan"
}, {
  "code": "E558",
  "name": "Bentonita",
  "type": "vegan"
}, {
  "code": "E559",
  "name": "Silicato de Aluminio (Caolín, Caolinita) / Caolín / Kaolina",
  "type": "vegan"
}, {
  "code": "E570",
  "name": "Ácidos Grasos / Ácidos / Acido esteárico",
  "type": "maybe"
}, {
  "code": "E571",
  "name": "Estearato de Amonio",
  "type": "maybe"
}, {
  "code": "E572",
  "name": "Estearato de Magnesio",
  "type": "maybe"
}, {
  "code": "E573",
  "name": "Estearato de Aluminio",
  "type": "maybe"
}, {
  "code": "E574",
  "name": "Ácido Glucónico / Ácido / Acido glucónico",
  "type": "vegan"
}, {
  "code": "E575",
  "name": "Glucono Delta Lactona (GDL) / Glucono / D-glucono-1,5-lactona",
  "type": "vegan"
}, {
  "code": "E576",
  "name": "Gluconato Sódico / Gluconato / Gluconato de sodio",
  "type": "vegan"
}, {
  "code": "E577",
  "name": "Gluconato Potásico / Gluconato / Gluconato de potasio",
  "type": "vegan"
}, {
  "code": "E578",
  "name": "Gluconato Cálcico / Gluconato / Gluconato de calcio",
  "type": "vegan"
}, {
  "code": "E579",
  "name": "Gluconato Ferroso / Gluconato / Gluconato de fierro",
  "type": "vegan"
}, {
  "code": "E585",
  "name": "Lactato Ferroso / Lactato / Lactato férrico",
  "type": "vegan"
}, {
  "code": "E620",
  "name": "Ácido Glutámico (Glutamatos) / Ácido / Ácido glutámico",
  "type": "vegan"
}, {
  "code": "E621",
  "name": "Glutamato Monosódico / Glutamato",
  "type": "vegan"
}, {
  "code": "E622",
  "name": "Glutamato Monopotásico / Glutamato",
  "type": "vegan"
}, {
  "code": "E623",
  "name": "Glutamato Cálcico / Glutamato",
  "type": "vegan"
}, {
  "code": "E624",
  "name": "Glutamato Amónico / Glutamato",
  "type": "vegan"
}, {
  "code": "E625",
  "name": "Glutamato Magnésico / Glutamato",
  "type": "vegan"
}, {
  "code": "E626",
  "name": "Ácido Guanílico / Ácido",
  "type": "maybe"
}, {
  "code": "E627",
  "name": "Guanilato Sódico / Guanilato",
  "type": "maybe"
}, {
  "code": "E628",
  "name": "Guanilato Potásico / Guanilato / Guanilato dipotásico",
  "type": "maybe"
}, {
  "code": "E629",
  "name": "Guanilato Cálcico / Guanilato",
  "type": "maybe"
}, {
  "code": "E630",
  "name": "Ácido Inosínico / Ácidoinosínico",
  "type": "maybe"
}, {
  "code": "E631",
  "name": "Inosinato Sódico / Inosinato",
  "type": "maybe"
}, {
  "code": "E632",
  "name": "Inosinato Potásico / Inosinato / Inosinato dipotásico",
  "type": "maybe"
}, {
  "code": "E633",
  "name": "Inosinato Cálcico / Inosinato",
  "type": "maybe"
}, {
  "code": "E634",
  "name": "Ribonucleótidos Cálcicos",
  "type": "maybe"
}, {
  "code": "E635",
  "name": "Ribonucleótidos Sódicos / 5'-Ribonucleótidos",
  "type": "maybe"
}, {
  "code": "E636",
  "name": "Maltol",
  "type": "maybe"
}, {
  "code": "E637",
  "name": "Etilmaltol",
  "type": "maybe"
}, {
  "code": "E640",
  "name": "Glicina y Glicinato Sódico / Glicina",
  "type": "animal"
}, {
  "code": "E650",
  "name": "Acetato de Zinc",
  "type": "nodata"
}, {
  "code": "E710",
  "name": "Espiramicina",
  "type": "vegan"
}, {
  "code": "E713",
  "name": "Tilosina",
  "type": "vegan"
}, {
  "code": "E900",
  "name": "Dimetil Polisiloxano (DMS) / Dimetilpolisiloxano",
  "type": "vegan"
}, {
  "code": "E900a",
  "name": "Polidimetil Siloxano (PDMS)",
  "type": "nodata"
}, {
  "code": "E901",
  "name": "Cera de Abejas / Cera",
  "type": "animal"
}, {
  "code": "E902",
  "name": "Cera Candelilla / Cera",
  "type": "vegan"
}, {
  "code": "E903",
  "name": "Cera Carnaúba / Cera / Cera carnauba",
  "type": "vegan"
}, {
  "code": "E904",
  "name": "Goma Laca (Shellac) / Goma / Goma laca",
  "type": "animal"
}, {
  "code": "E905",
  "name": "Cera Microcristalina / Aceites / Parafina, Vaselina",
  "type": "vegan"
}, {
  "code": "E906",
  "name": "Goma / Goma benzoica",
  "type": "vegan"
}, {
  "code": "E907",
  "name": "Poli-1-Deceno Hidrogenado / Cera / Cera microcristalina",
  "type": "vegan"
}, {
  "code": "E908",
  "name": "Cera / Cera de salvado de arroz",
  "type": "vegan"
}, {
  "code": "E912",
  "name": "Ésteres del Ácido Montánico / Esteres / Ésteres de ácido montánico",
  "type": "vegan"
}, {
  "code": "E913",
  "name": "Lanolina (Cera de Lana) / Lanolina",
  "type": "animal"
}, {
  "code": "E914",
  "name": "Cera Polietileno Oxidada / Cera",
  "type": "nodata"
}, {
  "code": "E915",
  "name": "Ésteres de colofonia",
  "type": "vegan"
}, {
  "code": "E920",
  "name": "L-Cisteína",
  "type": "animal"
}, {
  "code": "E921",
  "name": "L-Cistina / L-cisteína",
  "type": "animal"
}, {
  "code": "E922",
  "name": "Persulfato / Persulfato potásico",
  "type": "vegan"
}, {
  "code": "E923",
  "name": "Persulfato / Persulfato amónico",
  "type": "vegan"
}, {
  "code": "E924",
  "name": "Bromuro / Bromato potásico (número inválido)",
  "type": "vegan"
}, {
  "code": "E925",
  "name": "Cloro",
  "type": "vegan"
}, {
  "code": "E926",
  "name": "Bióxido / Dioxido de cloro",
  "type": "vegan"
}, {
  "code": "E927",
  "name": "Azoformamida",
  "type": "nodata"
}, {
  "code": "E927a",
  "name": "Azodicarbonamida / Carbamida",
  "type": "vegan"
}, {
  "code": "E927b",
  "name": "Carbamida (Urea) / Carbamida / Urea",
  "type": "vegan"
}, {
  "code": "E928",
  "name": "Benzoil peróxido",
  "type": "vegan"
}, {
  "code": "E930",
  "name": "Peróxido de sodio",
  "type": "vegan"
}, {
  "code": "E938",
  "name": "Gas Argón / Argón / Argon",
  "type": "vegan"
}, {
  "code": "E939",
  "name": "Gas Helio / Helio",
  "type": "vegan"
}, {
  "code": "E940",
  "name": "Diclorodifluorometano",
  "type": "vegan"
}, {
  "code": "E941",
  "name": "Gas Nitrógeno / Nitrógeno",
  "type": "vegan"
}, {
  "code": "E942",
  "name": "Gas Óxido nitroso / Óxido / Óxido nitroso",
  "type": "vegan"
}, {
  "code": "E943a",
  "name": "Gas Butano",
  "type": "nodata"
}, {
  "code": "E943b",
  "name": "Gas Isobutano",
  "type": "nodata"
}, {
  "code": "E944",
  "name": "Gas Propano",
  "type": "nodata"
}, {
  "code": "E948",
  "name": "Gas Oxígeno / Oxígeno",
  "type": "nodata"
}, {
  "code": "E949",
  "name": "Gas Hidrógeno",
  "type": "nodata"
}, {
  "code": "E950",
  "name": "Acesulfamo K (Acesulfame) / Acesulfamo / Acesulfamo K",
  "type": "vegan"
}, {
  "code": "E951",
  "name": "Aspartamo (Aspartame) / Aspartamo",
  "type": "vegan"
}, {
  "code": "E952",
  "name": "Ciclamato",
  "type": "vegan"
}, {
  "code": "E953",
  "name": "Isomaltosa",
  "type": "vegan"
}, {
  "code": "E954",
  "name": "Sacarina",
  "type": "vegan"
}, {
  "code": "E955",
  "name": "Sucralosa",
  "type": "vegan"
}, {
  "code": "E957",
  "name": "Taumatina",
  "type": "vegan"
}, {
  "code": "E958",
  "name": "Glicirricina",
  "type": "nodata"
}, {
  "code": "E959",
  "name": "Neohesperidina (NHDC) / Neohesperidina",
  "type": "vegan"
}, {
  "code": "E960",
  "name": "Esteviósido (Extracto de Stevia)",
  "type": "nodata"
}, {
  "code": "E961",
  "name": "Neotamo (Neotame)",
  "type": "nodata"
}, {
  "code": "E962",
  "name": "Sal de Aspartamo y Acesulfamo",
  "type": "nodata"
}, {
  "code": "E963",
  "name": "Tagatosa",
  "type": "nodata"
}, {
  "code": "E965",
  "name": "Maltitol",
  "type": "vegan"
}, {
  "code": "E965i",
  "name": "Maltitol",
  "type": "nodata"
}, {
  "code": "E965ii",
  "name": "Jarabe de Maltitol / Jarabe",
  "type": "nodata"
}, {
  "code": "E966",
  "name": "Lactitol",
  "type": "animal"
}, {
  "code": "E967",
  "name": "Xilitol",
  "type": "vegan"
}, {
  "code": "E968",
  "name": "Eritritol",
  "type": "nodata"
}, {
  "code": "E969",
  "name": "Advantamo (Advantame)",
  "type": "nodata"
}, {
  "code": "E999",
  "name": "Extracto de Quillay (Garcinia Cambogia) / Extracto / Extracto de quilaya",
  "type": "vegan"
}, {
  "code": "E1000",
  "name": "Ácido cólico",
  "type": "animal"
}, {
  "code": "E1100",
  "name": "Amilasa (Diastasa) / Amilasa",
  "type": "maybe"
}, {
  "code": "E1103",
  "name": "Invertasa (Sacarasa) / Invertasa",
  "type": "maybe"
}, {
  "code": "E1105",
  "name": "Lisozima (Muramidasa) / Lisozima",
  "type": "animal"
}, {
  "code": "E1200",
  "name": "Polidextrosa",
  "type": "vegan"
}, {
  "code": "E1201",
  "name": "Polivinil Pirrolidona (PVP) / Polivinil / Polivinilpirrolidona",
  "type": "vegan"
}, {
  "code": "E1202",
  "name": "Polivinil Polipirrolidona (PVPP) / Polivinilpolipirrolidona / Polivinilpolipirrolidona insoluble",
  "type": "vegan"
}, {
  "code": "E1203",
  "name": "Alcohol Polivinílico (PVOH)",
  "type": "nodata"
}, {
  "code": "E1204",
  "name": "Pululano (Pullulane)",
  "type": "nodata"
}, {
  "code": "E1208",
  "name": "Copolímero de Acetato de Vinilo",
  "type": "nodata"
}, {
  "code": "E1209",
  "name": "Copolímero de Injerto (PVA-PEG)",
  "type": "nodata"
}, {
  "code": "E1400",
  "name": "Dextrina / Dextrinas",
  "type": "vegan"
}, {
  "code": "E1401",
  "name": "Almidón Ácido / Almidón ácido",
  "type": "vegan"
}, {
  "code": "E1402",
  "name": "Almidón Alcalino Modificado",
  "type": "vegan"
}, {
  "code": "E1403",
  "name": "Almidón Blanqueado",
  "type": "vegan"
}, {
  "code": "E1404",
  "name": "Almidón Oxidado / Almidón",
  "type": "vegan"
}, {
  "code": "E1405",
  "name": "Almidón Enzimático",
  "type": "nodata"
}, {
  "code": "E1410",
  "name": "Fosfato Monoalmidón / Fosfato",
  "type": "vegan"
}, {
  "code": "E1411",
  "name": "Glicerol dialmidón",
  "type": "vegan"
}, {
  "code": "E1412",
  "name": "Fosfato Dialmidón / Fosfato",
  "type": "vegan"
}, {
  "code": "E1413",
  "name": "Fosfato Dialmidón Fosfatado / Fosfato",
  "type": "vegan"
}, {
  "code": "E1414",
  "name": "Fosfato Dialmidón Acetilado / Fosfato",
  "type": "vegan"
}, {
  "code": "E1420",
  "name": "Almidón Acetilado / Almidón",
  "type": "vegan"
}, {
  "code": "E1421",
  "name": "Almidón Acetilado de Vinilo",
  "type": "vegan"
}, {
  "code": "E1422",
  "name": "Adipato Dialmidón Acetilado / Adipato",
  "type": "vegan"
}, {
  "code": "E1423",
  "name": "Glicerol dialmidón acetilado",
  "type": "vegan"
}, {
  "code": "E1440",
  "name": "Hidroxipropil Almidón / Hidroxipropil",
  "type": "vegan"
}, {
  "code": "E1441",
  "name": "Glicerol Dialmidon Hidroxipropilado",
  "type": "vegan"
}, {
  "code": "E1442",
  "name": "Fosfato Dialmidón Hidroxipropilado / Fosfato / Fosfato Dialmidon Hidroxipropilado",
  "type": "vegan"
}, {
  "code": "E1450",
  "name": "Octenil Succinato Sódico de Almidón / Octenil",
  "type": "vegan"
}, {
  "code": "E1451",
  "name": "Almidón Oxidado Acetilado",
  "type": "nodata"
}, {
  "code": "E1452",
  "name": "Octenil Succinato Alumínico de Almidón",
  "type": "nodata"
}, {
  "code": "E1501",
  "name": "Hidrocarbonos bencilados",
  "type": "vegan"
}, {
  "code": "E1502",
  "name": "1,3 butanodiol",
  "type": "vegan"
}, {
  "code": "E1503",
  "name": "Aceite de ricino",
  "type": "vegan"
}, {
  "code": "E1504",
  "name": "Acetato de etilo",
  "type": "vegan"
}, {
  "code": "E1505",
  "name": "Citrato de Trietilo / Citrato",
  "type": "vegan"
}, {
  "code": "E1516",
  "name": "Monoacetato de glicerol",
  "type": "vegan"
}, {
  "code": "E1517",
  "name": "Diacetín (Diacetato de Glicerina) / Diacetato de glicerol",
  "type": "vegan"
}, {
  "code": "E1518",
  "name": "Triacetín (Triacetato de Glicerina) / Triacetato / Triacetato de glicerol",
  "type": "vegan"
}, {
  "code": "E1519",
  "name": "Alcohol Bencílico",
  "type": "nodata"
}, {
  "code": "E1520",
  "name": "Propilenglicol",
  "type": "vegan"
}, {
  "code": "E1521",
  "name": "Polietilenglicoles",
  "type": "nodata"
}, {
  "code": "E1525",
  "name": "Hidroxietil celulosa",
  "type": "vegan"
}, {
  "code": "H4511",
  "name": "Caseinato",
  "type": "nodata"
}, {
  "code": "H4512",
  "name": "Caseinato",
  "type": "nodata"
}, {
  "code": "E4945",
  "name": "Monooleato",
  "type": "nodata"
}];
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _allAditives = _interopRequireDefault(require("./allAditives.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var emojis = {
  animal: '🚫',
  maybe: '🤷‍',
  nodata: '❔',
  vegan: '🥦'
}; // https://en.wikipedia.org/wiki/E_number

var input = document.querySelector('#search');
var results = document.querySelector('#results');
if (!input) throw new Error('No encuentro el input!');

var _template = function _template(aditive) {
  return "<div class=\"item ".concat(aditive.type, "\">\n    <div class=\"title\">\n      <span>").concat(emojis[aditive.type], " ").concat(aditive.code, "</span>\n    </div>\n    <div>").concat(aditive.name, "</div>\n  </div>");
};

var onInput = function onInput() {
  var text = input.value.split(' ').filter(function (text) {
    return !!text;
  });

  if (text.length) {
    var aditivesMap = text.filter(function (t) {
      return t.match(/\d{3,4}/i);
    }).reduce(function (map, text) {
      var reg = new RegExp(text, 'i');

      var aditive = _allAditives.default.find(function (aditive) {
        return aditive.code.match(reg);
      });

      if (aditive && !map.has(aditive.code)) {
        map.set(aditive.code, aditive);
      }

      return map;
    }, new Map());

    var aditives = _toConsumableArray(aditivesMap.values());

    results.innerHTML = aditives.map(function (aditive) {
      return _template(aditive);
    }).reverse().join('\n');
  }
};

input.addEventListener('input', onInput);
},{"./allAditives.json":"allAditives.json"}],"../../.nvm/versions/node/v12.16.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37485" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v12.16.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/es-vegan-o-que2.e31bb0bc.js.map