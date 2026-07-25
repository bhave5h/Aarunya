export function cn(...inputs: any[]) {
  return inputs
    .flatMap((x) => {
      if (!x) return [];
      if (typeof x === "string") return x.split(" ");
      if (Array.isArray(x)) return x;
      if (typeof x === "object") {
        return Object.entries(x)
          .filter(([, val]) => Boolean(val))
          .map(([key]) => key);
      }
      return [];
    })
    .filter(Boolean)
    .join(" ");
}
