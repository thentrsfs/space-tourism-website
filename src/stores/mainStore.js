import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { useQuasar } from "quasar";

export const useMainStore = defineStore("main", () => {
  const $q = useQuasar();

  const bgImgUrl = computed(() => {
    let bgUrl = "";

    switch (selectedButton.value) {
      case "home":
        if ($q.screen.lt.sm) {
          bgUrl = backgroundImages["home"].mobile;
        } else if ($q.screen.gt.sm) {
          bgUrl = backgroundImages["home"].desktop;
        } else {
          bgUrl = backgroundImages["home"].tablet;
        }
        break;

      case "destination":
        if ($q.screen.lt.sm) {
          bgUrl = backgroundImages["destination"].mobile;
        } else if ($q.screen.gt.sm) {
          bgUrl = backgroundImages["destination"].desktop;
        } else {
          bgUrl = backgroundImages["destination"].tablet;
        }
        break;

      case "crew":
        if ($q.screen.lt.sm) {
          bgUrl = backgroundImages["crew"].mobile;
        } else if ($q.screen.gt.sm) {
          bgUrl = backgroundImages["crew"].desktop;
        } else {
          bgUrl = backgroundImages["crew"].tablet;
        }
        break;

      case "technology":
        if ($q.screen.lt.sm) {
          bgUrl = backgroundImages["technology"].mobile;
        } else if ($q.screen.gt.sm) {
          bgUrl = backgroundImages["technology"].desktop;
        } else {
          bgUrl = backgroundImages["technology"].tablet;
        }
        break;
    }

    return bgUrl;
  });

  const selectedButton = ref("home");

  const selectedPlanet = ref("moon");

  const selectedCrewMember = ref("douglas");

  const selectedTerminology = ref("first");

  const backgroundImages = reactive({
    home: {
      desktop: "/home/background-home-desktop.jpg",
      tablet: "/home/background-home-tablet.jpg",
      mobile: "/home/background-home-mobile.jpg",
    },

    destination: {
      desktop: "/destination/background-destination-desktop.jpg",
      tablet: "/destination/background-destination-tablet.jpg",
      mobile: "/destination/background-destination-mobile.jpg",
    },
    crew: {
      desktop: "/crew/background-crew-desktop.jpg",
      tablet: "/crew/background-crew-tablet.jpg",
      mobile: "/crew/background-crew-mobile.jpg",
    },
    technology: {
      desktop: "/technology/background-technology-desktop.jpg",
      tablet: "/technology/background-technology-tablet.jpg",
      mobile: "/technology/background-technology-mobile.jpg",
    },
  });

  const crewInfo = reactive({
    douglas: {
      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      content:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: "/crew/image-douglas-hurley.png",
    },
    mark: {
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      content:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: "/crew/image-mark-shuttleworth.png",
    },
    victor: {
      title: "PILOT",
      name: "VICTOR GLOVER",
      content:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      img: "/crew/image-victor-glover.png",
    },
    anousheh: {
      title: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      content:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      img: "/crew/image-anousheh-ansari.png",
    },
  });

  const planetsInfo = reactive({
    moon: {
      title: "MOON",
      content:
        "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 KM",
      estTravelTime: "3 DAYS",
      img: "/destination/image-moon.png",
    },
    mars: {
      title: "MARS",
      content:
        "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
      avgDistance: "225 MIL. KM",
      estTravelTime: "9 MONTHS",
      img: "/destination/image-mars.png",
    },
    europa: {
      title: "EUROPA",
      content:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. KM",
      estTravelTime: "3 YEARS",
      img: "/destination/image-europa.png",
    },
    titan: {
      title: "TITAN",
      content:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home(just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 BIL. KM",
      estTravelTime: "7 YEARS",
      img: "/destination/image-titan.png",
    },
  });

  const terminologyInfo = {
    first: {
      title: "LAUNCH VEHICLE",
      content:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerfull in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: "/technology/image-launch-vehicle-portrait.jpg",
    },
    second: {
      title: "SPACEPORT",
      content:
        "A spaceport of cosmodrome is a site for launching(or recieving)spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch. ",
      img: "/technology/image-spaceport-portrait.jpg",
    },
    third: {
      title: "SPACE CAPSULE",
      content:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: "/technology/image-space-capsule-portrait.jpg",
    },
  };

  const selectButton = (button) => {
    selectedButton.value = button;
  };

  const selectPlanet = (planet) => {
    selectedPlanet.value = planet;
  };

  const selectCrewMember = (member) => {
    selectedCrewMember.value = member;
  };

  const selectTerminology = (terminology) => {
    selectedTerminology.value = terminology;
  };

  return {
    bgImgUrl,
    selectedButton,
    selectButton,
    backgroundImages,
    selectPlanet,
    selectedPlanet,
    planetsInfo,
    selectedCrewMember,
    selectCrewMember,
    crewInfo,
    selectTerminology,
    selectedTerminology,
    terminologyInfo,
  };
});
