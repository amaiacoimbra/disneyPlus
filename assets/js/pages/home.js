import UserProfile from "../components/user-profile.js"

const Home = (data) => {
    const userProfileElement = document.querySelector('[data-usermenu="user-profiles"]')
    const controlsSliderElement = document.querySelector('[data-banner="controls"]')
    const bannerSliderElement = document.querySelector('[data-banner="slider"]')
    const collectionsElement = document.querySelector('[data-carousel="collections"]')
    const { banners, categories, movies, userProfiles } = data

    for (const profile of userProfiles) {
        userProfileElement.innerHTML = userProfileElement.innerHTML + UserProfile(profile)
    }
}

export default Home