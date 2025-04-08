export async function populateCards() {


    return await window.champions.get_champions();// Get array from function

}

export async function handleSkinSelected(skin, setShowSuccess, setShowError) {
    // Construct key
    const key = `${skin.champion.id}`;
    const s_value = `${skin.skin_number}`;
    // Create Map and set the entry
    const skinMap = new Map();
    skinMap.set(key, s_value);

    // Optional: Convert to plain object if Electron can't handle Map directly

    // Call Electron API
    let response = await window.champions.select_skin(skinMap); // or window.electron.select_skin(key)
    if (response == false) {
        setShowError(true)
    } else {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }

    console.log("Skin selected and passed to Electron:", skinMap.entries());

}
