const shareBtn = document.getElementById("share");
const detail = document.getElementById("details");
const popup = document.getElementById("popup");

// Store the original content of the details section
const originalContent = detail.innerHTML;

function toggleSocialIcons() {
  if (window.innerWidth >= 768) {
    // Show or hide the popup
    if (popup.classList.contains("hidden")) {
      popup.classList.remove("hidden");
      shareBtn.classList.add("bg-secondary-dark-grayish-blue");
    } else {
      popup.classList.add("hidden");
      shareBtn.classList.remove("bg-secondary-dark-grayish-blue");
    }
  } else {
    // Toggle content replacement on smaller screens
    if (detail.innerHTML === originalContent) {
      detail.innerHTML = `
        <div class="flex items-center justify-center gap-4 rounded-b-2xl">
          <p class="text-primary-grayish-blue tracking-[5px]">SHARE</p>
          <img src="../images/icon-facebook.svg" class="w-5 h-5" alt="Facebook icon" />
          <img src="../images/icon-twitter.svg" class="w-5 h-5" alt="Twitter icon" />
          <img src="../images/icon-pinterest.svg" class="w-5 h-5" alt="Pinterest icon" />
        </div>
        <p id="share" class="p-2 rounded-full bg-secondary-light-grayish-blue cursor-pointer">
          <img src="../images/icon-share.svg" alt="Share icon" />
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
