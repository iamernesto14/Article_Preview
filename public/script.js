const shareBtn = document.getElementById("share");
const shareIcon = document.getElementById("share-icon");
const detail = document.getElementById("details");
const popup = document.getElementById("popup");

// Store the original content of the details section
const originalContent = detail.innerHTML;

function toggleSocialIcons() {
  if (window.innerWidth >= 768) {
    // Show or hide the popup
    if (popup.classList.contains("hidden")) {
      popup.classList.remove("hidden");
      shareBtn.classList.add("bg-gray-700");
      shareIcon.classList.add("text-white");
      shareIcon.children[0].setAttribute("fill", "#fff");  // Change icon color to white
    } else {
      popup.classList.add("hidden");
      shareBtn.classList.remove("bg-gray-700");
      shareIcon.classList.remove("text-white");
      shareIcon.children[0].setAttribute("fill", "#fff");  // Revert icon color to original
    }
  } else {
    // Toggle content replacement on smaller screens
    if (detail.innerHTML === originalContent) {
      detail.innerHTML = `
        <div class="flex items-center justify-center gap-4 rounded-b-2xl">
          <p class="text-primary-grayish-blue tracking-[5px]">SHARE</p>
          <img src="./images/icon-facebook.svg" class="w-5 h-5" alt="Facebook icon" />
          <img src="./images/icon-twitter.svg" class="w-5 h-5" alt="Twitter icon" />
          <img src="./images/icon-pinterest.svg" class="w-5 h-5" alt="Pinterest icon" />
        </div>
        <p id="share" class="p-2 rounded-full bg-primary-grayish-blue cursor-pointer">
          <svg id="share-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="13">
            <path fill="#ecf2f8" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
          </svg>
        </p>`;
      
      // Add the new background color class
      detail.classList.add("bg-secondary-dark-grayish-blue");
      
      // Re-assign the event listener to the new share button
      document.getElementById("share").addEventListener("click", toggleSocialIcons);
    } else {
      detail.innerHTML = originalContent;
      
      // Remove the new background color class
      detail.classList.remove("bg-secondary-dark-grayish-blue");
      
      // Re-assign the event listener to the original share button
      document.getElementById("share").addEventListener("click", toggleSocialIcons);
    }
  }
}

// Assign the event listener to the initial share button
shareBtn.addEventListener("click", toggleSocialIcons);
