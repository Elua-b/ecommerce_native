import jwtDecode from 'jwt-decode';

export const getTokenData = (token) => {
   if (!token) return null;
   try {
      const decoded = jwtDecode(token);
      return decoded;
   } catch (error) {
      //   console.log(error);
      return null;
   }
};

// throttle function is used to delay the execution of the function
export function throttle(func, limit) {
   let inThrottle;
   return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
         func.apply(context, args);
         inThrottle = true;
         setTimeout(() => (inThrottle = false), limit);
      }
   };
}

// debounce function is used to delay the execution of the function
export function debounce(func, timeout = 300) {
   let timer;
   return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         func.apply(this, args);
      }, timeout);
   };
}
