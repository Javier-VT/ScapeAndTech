const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            mobileMenu.classList.remove('is-active');
            navMenu.classList.remove('active');
        }
    });
});


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const video = document.getElementById('myVideo');
video.addEventListener('error', function() {
    console.log('El video de fondo no pudo cargarse o no es compatible.');
});

const LINKS = {
    es: {
        celeritas: "https://drive.google.com/file/d/1FaUNqLi5VRBSE9MApTL_CnHrXN1rwHEe/view?usp=sharing",
        optifine: "https://drive.google.com/file/d/1Yd6d61DK5aq8CMZCvvovdB0F1TLFpX1X/view?usp=drivesdk"
    },
    en: {
        celeritas: "https://drive.google.com/file/d/1ceyKA156a4V8zxyz0zleSzoHoupdMJM9/view?usp=drivesdk",
        optifine: "https://drive.google.com/file/d/1xjKMtWRY5sNIgDrjWBZEytDfdoak66rJ/view?usp=drivesdk"
    }
};

const translations = {
    es: {
        nav_home: "Inicio",
        nav_info: "Información",
        nav_mechanics: "Mecánicas",
        nav_download: "Descargar",
        
        hero_title: "SOBREVIVE A LA <span class='text-danger'>INFECCIÓN</span>",
        hero_subtitle: "HBM's Nuclear Tech + Scape and Run: Parasites. Tienes 60 días antes de que llegue del sistema Digamma.",
        btn_start: "Empezar la Misión <i class='fas fa-download'></i>",
        btn_trailer: "Ver Tráiler <i class='fas fa-play'></i>",
        ip_soon: "satom.holy.gg",
        
        section_info: "Información del <span class='text-highlight'>Servidor</span>",
        info_multiplayer_title: "Enfoque Multijugador",
        info_multiplayer_text: "Este modpack, especialmente en sus primeras versiones, está enfocado en un <strong>SERVER</strong>. Tenlo en cuenta si lo juegas solo. Incluye características para multijugador como facciones, voice chat y más.",
        info_lore_text: "El lore se contará a medida que las misiones avancen, aunque se puede inferir viendo las estructuras custom y el entorno post-apocalíptico.",
        info_tip_label: "Consejo rápido:",
        info_tip_text: "Puedes pregenerar el mundo colocando en el chat:",
        
        info_features_title: "Características Rápidas",
        feat_mods: "<i class='fas fa-scroll'></i> Más de 200 mods + 2 opcionales.",
        feat_quests: "<i class='fas fa-tasks'></i> Progresión basada en misiones (guía, no obligatorias).",
        feat_time: "<i class='fas fa-clock'></i> Los días y noches duran 1 hora y 20 minutos.",
        feat_trees: "<i class='fas fa-tree'></i> Los árboles caen de una (Treecapitator/similar).",
        feat_dragons: "<i class='fas fa-dragon'></i> Ice and Fire presente, generación natural desactivada (Solo estructuras).",
        feat_book: "<i class='fas fa-book-dead'></i> Libro inicial de Enigmatic Legacy sirve como arma cuerpo a cuerpo ígnea.",
        feat_seasons: "<i class='fas fa-snowflake'></i> Sistema de estaciones.",
        feat_parasites: "<i class='fas fa-biohazard'></i> Los <strong>Parásitos</strong> llegarán entre el día 31 y 60.",
        feat_voice: "<i class='fas fa-headset'></i> Voice Chat (Configurar con tecla 'V').",
        feat_revive: "<i class='fas fa-skull-crossbones'></i> NO hay mod para revivir jugadores (está bugeado).",
        feat_note: "Nota: Algunas recetas iniciales han sido cambiadas para integración. Sigue el principio de las misiones.",

        section_mechanics: "Dificultad y <span class='text-danger'>Maldiciones</span>",
        mech_accessories_title: "Accesorios Iniciales",
        mech_accessories_desc: "Al aparecer en el mundo aparecerás con 2 accesorios:",
        mech_collar_title: "El Collar (Estadística Aleatoria)",
        mech_ring_title: "El Anillo de las 7 Maldiciones",
        mech_ring_desc: "Te dará el modo maldito. Una vez colocado, es <strong>PERMANENTE</strong>. Permite usar objetos OP a cambio de riesgo de morir de un golpe.",
        
        col_red: "<span style='color:red'>Rojo:</span> +1,5 daño base",
        col_cyan: "<span style='color:cyan'>Celeste:</span> +15% velocidad al correr",
        col_purple: "<span style='color:purple'>Morado:</span> +15% oportunidad de desviar",
        col_violet: "<span style='color:violet'>Violeta:</span> -15% gravedad",
        col_green: "<span style='color:green'>Verde:</span> +25% velocidad al minar",
        col_black: "<span style='color:black'>Negro:</span> +10% robo de vida",
        col_blue: "<span style='color:blue'>Azul:</span> +25% velocidad al nadar",

        mech_curses_title: "Siete Maldiciones",
        curse_1: "Recibes el DOBLE de daño de CUALQUIER fuente.",
        curse_2: "Las criaturas neutrales son agresivas contigo.",
        curse_3: "La armadura es un 30% menos efectiva.",
        curse_4: "Los monstruos reciben un 50% menos de daño de tu parte.",
        curse_5: "Cuando estás en llamas, ardes para siempre.",
        curse_6: "Cada muerte destroza tu alma.",
        curse_7: "Sufres de insomnio incurable.",

        mech_blessings_title: "Siete Bendiciones",
        bless_1: "+1 Nivel de Saqueo.",
        bless_2: "+1 Nivel de Fortuna.",
        bless_3: "+400% de experiencia obtenida.",
        bless_4: "+10 Poder de Encantamiento en la Tabla.",
        bless_5: "Objetos únicos de algunas criaturas.",
        bless_6: "Funcionalidad del Anillo de Ender.",
        bless_7: "Puedes crear y usar pátinas únicas.",

        mech_diff_title: "Dificultad Escalable (Difficulty 0.0)",
        mech_diff_desc1: "En la parte superior de tu pantalla observarás un contador que aumenta con el tiempo (0.1, 0.2, etc.).",
        mech_diff_desc2: "Esto indica la dificultad general. Con el tiempo, los mobs podrán colocar bloques, romperlos, usar TNT, etc.",
        mech_diff_note: "Al principio son raros, pero con el tiempo se vuelven más frecuentes.",
        
        section_trailer: "Tráiler del Servidor",

        section_install: "Protocolo de <span class='text-danger'>Instalación</span>",
        steps_title: "Pasos para instalar:",
        step_1: "Ve a tu Launcher de confianza.",
        step_1_link: "Tutorial No-Premium",
        step_2: "Si eres No-Premium, busca el botón 'Importar' en tu launcher.",
        step_3: "Abre la carpeta de la instancia creada.",
        step_4: "Mueve dentro los archivos del modpack descargado.",
        step_5: "Ejecuta el juego.",
        step_6: "Dentro del juego, ve a <strong>Ajustes > Gráficos</strong> y coloca <strong>GUI Scale en 2</strong>.",
        step_7_bold: "IMPORTANTE:",
        step_7: "Si juegas en Un Jugador, coloca el tipo de mundo en 'RTGC-New Realistic'.",
        
        rp_title: "Orden de Resource Packs (Crucial)",
        rp_desc: "Ve a Resource Packs y asegúrate de que estén activos en este orden exacto:",
        
        version_select: "Selecciona tu Versión",
        
        ver_celeritas_title: "Versión Celeritas (Recomendada)",
        ver_celeritas_desc: "La versión original, perfectamente optimizada. Requiere <strong>Java 21</strong>.",
        btn_download_celeritas: "Descargar Celeritas <i class='fas fa-download'></i>",
        
        ver_optifine_title: "Versión OptiFine",
        ver_optifine_desc: "Pensada para quienes no pueden usar Java 21. <strong>Advertencia:</strong> Peor optimización.",
        btn_download_optifine: "Descargar OptiFine <i class='fas fa-download'></i>",

        ver_extra_title: "Música custom (viene por separado)",
        ver_extra_desc: "Esto se coloca junto a la carpeta de config, mods, resource packs, etc.",
        btn_download_extra: "Descargar Archivos Extra <i class='fas fa-download'></i>",
        btn_download_ambience: "Descargar Mod Ambience (Opcional, nesesario solo si quieres la musica) <i class='fas fa-external-link-alt'></i>",

        warn_title: "ADVERTENCIA",
        warn_desc: "Si usted se encuentra en una estructura un <strong>horno eléctrico</strong>, <span class='text-danger'>NO interactúe con él</span>, crasheará el server/cliente. Si se llega a encontrar con uno, rómpalo. Solo ocurre en estructuras, no cuando es colocado por el jugador.",
        
        discord_title: "Únete al <span class='text-highlight'>Discord</span>",
        discord_desc: "Recibe actualizaciones, avances, habla con gente y organiza grupos.",
        btn_discord: "Ingresar al Discord <i class='fas fa-external-link-alt'></i>",
        
        credit_modpack: "Modpack y Servidor por",
        credit_community: "Por y para la comunidad de",
        credit_thanks: "Agradecimiento especial a",
        credit_possible: "por hacer posible este proyecto.",
        credit_traduction: "Agradecimiento por el apoyo a la traducción para ",
        credit_web: "Página por"
    },
    en: {
        nav_home: "Home",
        nav_info: "Info",
        nav_mechanics: "Mechanics",
        nav_download: "Download",
        
        hero_title: "SURVIVE THE <span class='text-danger'>INFECTION</span>",
        hero_subtitle: "HBM's Nuclear Tech + Scape and Run: Parasites. You have 60 days before the Digamma system arrives.",
        btn_start: "Start Mission <i class='fas fa-download'></i>",
        btn_trailer: "Watch Trailer <i class='fas fa-play'></i>",
        ip_soon: "satom.holy.gg",
        
        section_info: "<span class='text-highlight'>Server</span> Information",
        info_multiplayer_title: "Multiplayer Focus",
        info_multiplayer_text: "This modpack, specially in early versions, is focused on a <strong>SERVER</strong>. Keep that in mind if playing solo. Includes features like factions, voice chat, etc.",
        info_lore_text: "Lore will be told as quests progress, although it can be inferred by seeing custom structures and the post-apocalyptic environment.",
        info_tip_label: "Quick Tip:",
        info_tip_text: "You can pre-generate the world by typing in chat:",
        
        info_features_title: "Quick Features",
        feat_mods: "<i class='fas fa-scroll'></i> More than 200 mods + 2 optional.",
        feat_quests: "<i class='fas fa-tasks'></i> Quest-based progression (guide, not mandatory).",
        feat_time: "<i class='fas fa-clock'></i> Days and nights last 1 hour and 20 minutes.",
        feat_trees: "<i class='fas fa-tree'></i> Trees fall at once (Treecapitator/similar).",
        feat_dragons: "<i class='fas fa-dragon'></i> Ice and Fire present, natural generation disabled (Structures only).",
        feat_book: "<i class='fas fa-book-dead'></i> Enigmatic Legacy starter book works as a fiery melee weapon.",
        feat_seasons: "<i class='fas fa-snowflake'></i> Season system.",
        feat_parasites: "<i class='fas fa-biohazard'></i> <strong>Parasites</strong> arrive between day 31 and 60.",
        feat_voice: "<i class='fas fa-headset'></i> Voice Chat (Config with 'V' key).",
        feat_revive: "<i class='fas fa-skull-crossbones'></i> NO player revive mod (it's bugged).",
        feat_note: "Note: Some starter recipes have been changed for integration. Follow the quest principles.",

        section_mechanics: "Difficulty and <span class='text-danger'>Curses</span>",
        mech_accessories_title: "Starter Accessories",
        mech_accessories_desc: "You will spawn in the world with 2 accessories:",
        mech_collar_title: "The Collar (Random Stat)",
        mech_ring_title: "Ring of the 7 Curses",
        mech_ring_desc: "Gives you Cursed Mode. Once worn, it is <strong>PERMANENT</strong>. Allows use of OP items at the risk of getting one-shot.",
        
        col_red: "<span style='color:red'>Red:</span> +1.5 Base Damage",
        col_cyan: "<span style='color:cyan'>Cyan:</span> +15% Sprint Speed",
        col_purple: "<span style='color:purple'>Purple:</span> +15% Deflect Chance",
        col_violet: "<span style='color:violet'>Violet:</span> -15% Gravity",
        col_green: "<span style='color:green'>Green:</span> +25% Mining Speed",
        col_black: "<span style='color:black'>Black:</span> +10% Life Steal",
        col_blue: "<span style='color:blue'>Blue:</span> +25% Swim Speed",

        mech_curses_title: "Seven Curses",
        curse_1: "Receive DOUBLE damage from ANY source.",
        curse_2: "Neutral creatures are aggressive towards you.",
        curse_3: "Armor is 30% less effective.",
        curse_4: "Monsters receive 50% less damage from you.",
        curse_5: "When on fire, you burn forever.",
        curse_6: "Every death shatters your soul.",
        curse_7: "Suffer from incurable insomnia.",

        mech_blessings_title: "Seven Blessings",
        bless_1: "+1 Looting Level.",
        bless_2: "+1 Fortune Level.",
        bless_3: "+400% experience gained.",
        bless_4: "+10 Enchantment Power at Table.",
        bless_5: "Unique items from some creatures.",
        bless_6: "Ender Ring functionality.",
        bless_7: "Can create and use unique patinas.",

        mech_diff_title: "Scalable Difficulty (Difficulty 0.0)",
        mech_diff_desc1: "At the top of your screen, you'll see a counter increasing over time (0.1, 0.2, etc.).",
        mech_diff_desc2: "This indicates general difficulty. Over time, mobs can place blocks, break them, use TNT, etc.",
        mech_diff_note: "At first they are rare, but become more frequent over time.",
        
        section_trailer: "Server Trailer",

        section_install: "<span class='text-danger'>Installation</span> Protocol",
        steps_title: "Installation Steps:",
        step_1: "Go to your trusted Launcher.",
        step_1_link: "No-Premium Tutorial",
        step_2: "If No-Premium, look for the 'Import' button in your launcher.",
        step_3: "Open the instance folder created.",
        step_4: "Move the downloaded modpack files inside.",
        step_5: "Run the game.",
        step_6: "In-game, go to <strong>Settings > Graphics</strong> and set <strong>GUI Scale to 2</strong>.",
        step_7_bold: "IMPORTANT:",
        step_7: "If playing Singleplayer, set world type to 'RTGC-New Realistic'.",
        
        rp_title: "Resource Pack Order (Crucial)",
        rp_desc: "Go to Resource Packs and ensure they are active in this exact order:",
        
        version_select: "Select your Version",
        
        ver_celeritas_title: "Celeritas Version (Recommended)",
        ver_celeritas_desc: "Original version, perfectly optimized. Requires <strong>Java 21</strong>.",
        btn_download_celeritas: "Download Celeritas <i class='fas fa-download'></i>",
        
        ver_optifine_title: "OptiFine Version",
        ver_optifine_desc: "For those who can't use Java 21. <strong>Warning:</strong> Worse optimization.",
        btn_download_optifine: "Download OptiFine <i class='fas fa-download'></i>",

        ver_extra_title: "Custom Music (Separate Download)",
        ver_extra_desc: "Place this next to config, mods, resource packs, etc folders.",
        btn_download_extra: "Download Extra Files <i class='fas fa-download'></i>",
        btn_download_ambience: "Download Ambience Mod (Optional, required only if you want the music) <i class='fas fa-external-link-alt'></i>",

        warn_title: "WARNING",
        warn_desc: "If you find an <strong>Electric Furnace</strong> inside a structure, <span class='text-danger'>DO NOT interact with it</span>, it will crash the server/client. If you find one, break it immediately. This only happens in generated structures, not when placed by a player.",
        
        discord_title: "Join the <span class='text-highlight'>Discord</span>",
        discord_desc: "Get updates, sneak peeks, chat with people, and organize groups.",
        btn_discord: "Enter Discord <i class='fas fa-external-link-alt'></i>",
        
        credit_modpack: "Modpack and Server by",
        credit_community: "By and for the community of",
        credit_thanks: "Special thanks to",
        credit_possible: "for making this project possible.",
        credit_traduction: "Thanks for helping translate",
        credit_web: "Website by"
    }
};

let currentLang = localStorage.getItem('lang') || 'es';
const langBtn = document.getElementById('lang-btn');

const btnCeleritas = document.getElementById('btn-celeritas');
const btnOptifine = document.getElementById('btn-optifine');

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    if (btnCeleritas) btnCeleritas.href = LINKS[lang].celeritas;
    if (btnOptifine) btnOptifine.href = LINKS[lang].optifine;

    if (lang === 'es') {
        langBtn.innerHTML = "🇺🇸 EN";
        currentLang = 'es';
    } else {
        langBtn.innerHTML = "🇪🇸 ES";
        currentLang = 'en';
    }
    
    localStorage.setItem('lang', currentLang);
}

langBtn.addEventListener('click', () => {
    if (currentLang === 'es') {
        updateLanguage('en');
    } else {
        updateLanguage('es');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});