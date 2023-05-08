import React from "react";

function FloralIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      version="1.1"
      viewBox="0 0 511.991 511.991"
      xmlSpace="preserve"
    >
      <path d="M476.873 222.208c-5.111-5.111-12.186-9.156-20.352-12.109 20.079-26.274 26.76-53.897 14.199-66.458-12.57-12.57-40.192-5.879-66.466 14.208-2.944-8.175-6.989-15.258-12.092-20.369-6.033-6.033-13.244-9.54-20.992-9.54-21.205 0-38.4 26.283-38.4 58.701 0 20.574 6.921 38.673 17.408 49.152 1.579 1.579 3.379 2.586 5.154 3.678-58.121 41.139-92.459 84.762-112.111 129.195V149.188c2.381.538 4.685 1.22 7.296 1.22 14.822 0 32.521-7.902 47.07-22.451 22.921-22.921 29.346-53.666 14.353-68.659-5.495-5.478-13.082-8.098-21.615-8.098-7.228 0-15.095 2.142-22.955 5.837C262.993 24.26 248.188 0 230.421 0s-32.58 24.269-36.958 57.045c-7.868-3.695-15.735-5.845-22.955-5.845-8.533 0-16.111 2.62-21.589 8.098-14.993 14.993-8.567 45.739 14.353 68.659 14.549 14.549 32.247 22.451 47.07 22.451 2.603 0 4.907-.683 7.27-1.212v204.749c-14.097-35.959-34.261-65.519-60.348-89.301 1.562-.973 3.157-1.852 4.548-3.243 10.479-10.479 17.408-28.587 17.408-49.152 0-32.418-17.195-58.701-38.4-58.701-7.748 0-14.959 3.507-20.992 9.54-5.111 5.111-9.156 12.186-12.109 20.361-26.274-20.079-53.897-26.761-66.458-14.199-12.57 12.57-5.871 40.192 14.208 66.466-8.175 2.944-15.258 6.989-20.361 12.092-6.033 6.033-9.54 13.244-9.54 20.992 0 21.205 26.283 38.4 58.701 38.4 20.574 0 38.673-6.929 49.152-17.408 1.937-1.937 3.132-4.164 4.514-6.323.555-.102 1.024-.341 1.562-.469 30.592 27.708 52.113 64.794 64.623 112.222-14.063-15.104-34.765-25.6-65.724-25.6-17.237 0-37.581 3.2-61.568 10.573 42.47 6.519 31.676 38.281 61.312 56.482 38.315 23.526 64.649 47.061 79.027 61.397.102 4.693.452 9.088.452 13.918h25.6c0-7.714.196-15.283.503-22.784 12.407-19.695 33.408-49.51 63.505-79.616 24.747-24.747 15.735-67.934 51.2-76.8-20.036-10.018-37.018-14.37-51.413-14.37-.819 0-1.468.265-2.27.299 17.758-20.907 40.38-41.165 68.966-60.954.119.026.222.085.35.102 1.382 2.159 2.577 4.386 4.506 6.323 10.479 10.479 28.587 17.408 49.152 17.408 32.418 0 58.701-17.195 58.701-38.4.002-7.748-3.513-14.959-9.546-20.992zM268.361 85.837c8.653-6.443 16.87-9.037 21.965-9.037 2.27 0 3.328.469 3.49.597 1.638 2.074 1.067 17.041-14.353 32.461-6.306 6.306-12.646 10.095-18.219 12.348 3.848-10.436 6.314-22.844 7.117-36.369zm-86.989 24.021c-15.411-15.411-15.991-30.379-14.353-32.452.162-.128 1.22-.606 3.49-.606 5.094 0 13.312 2.594 21.965 9.037.802 13.525 3.268 25.933 7.117 36.361-5.573-2.253-11.913-6.034-18.219-12.34zM84.254 281.6c-21.803 0-32.794-10.18-33.101-12.8.026-.205.444-1.289 2.048-2.893 3.601-3.601 11.247-7.578 21.922-9.139 10.129 8.994 20.651 16.026 30.746 20.676-5.538 2.347-12.689 4.156-21.615 4.156zm2.261-49.007c-18.782-18.782-25.481-36.54-26.095-44.194 7.654.614 25.421 7.313 44.194 26.095 18.782 18.782 25.481 36.54 26.095 44.194-7.654-.614-25.42-7.313-44.194-26.095zm62.951 1.254c-4.651-10.095-11.682-20.617-20.676-30.754 1.562-10.658 5.53-18.304 9.139-21.914 1.604-1.604 2.688-2.022 2.893-2.048 2.628.307 12.8 11.298 12.8 33.101-.001 8.926-1.81 16.077-4.156 21.615zm2.065 181.027c-6.17-3.789-8.9-8.533-13.602-17.289-.41-.759-.828-1.545-1.263-2.338.58-.009 1.152-.009 1.715-.009 21.871 0 37.803 6.204 48.7 18.953 8.576 10.027 13.577 23.518 16.35 37.325-14.098-11.426-31.395-24.056-51.9-36.642zm78.89-288.367c-4.975-5.845-12.8-23.142-12.8-49.707 0-26.556 7.817-43.853 12.8-49.707 4.975 5.854 12.8 23.142 12.8 49.707 0 26.556-7.825 43.853-12.8 49.707zm76.587 217.514c.922.009 1.86.034 2.816.085-3.465 7.27-5.862 14.532-7.91 20.762-3.644 11.068-6.793 20.617-12.791 26.624-12.032 12.032-22.716 24.047-32.077 35.482 3.379-28.382 10.539-56.218 24.499-71.646 7.074-7.817 14.933-11.307 25.463-11.307zm55.501-135.765c-2.347-5.538-4.156-12.689-4.156-21.615 0-21.803 10.18-32.794 12.8-33.101.205.026 1.289.444 2.893 2.048 3.601 3.601 7.578 11.247 9.139 21.922-8.994 10.129-16.025 20.651-20.676 30.746zm44.851-19.362c18.782-18.782 36.54-25.481 44.194-26.095-.614 7.654-7.313 25.421-26.095 44.194-18.782 18.773-36.54 25.481-44.194 26.095.614-7.654 7.313-25.412 26.095-44.194zM427.721 256c-8.926 0-16.077-1.809-21.615-4.156 10.095-4.651 20.617-11.682 30.746-20.676 10.675 1.562 18.321 5.538 21.922 9.139 1.604 1.604 2.022 2.688 2.048 2.893-.316 2.62-11.307 12.8-33.101 12.8z"></path>
    </svg>
  );
}

export default FloralIcon;
