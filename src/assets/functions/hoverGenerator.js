export const hoverGenerator = color => {
    const mainColor = color.split("-").slice(1).join("-");
    switch (mainColor) {
        case "green-500":
            return "hover:text-green-500 hover:border-green-500";
        case "orange-500":
            return "hover:text-orange-500 hover:border-orange-500";
        case "red-500":
            return "hover:text-red-500 hover:border-red-500";
        case "yellow-500":
            return "hover:text-yellow-500 hover:border-yellow-500";
        case "cyan-500":
            return "hover:text-cyan-500 hover:border-cyan-500";
        case "blue-500":
            return "hover:text-blue-500 hover:border-blue-500";
        case "fuchsia-500":
            return "hover:text-fuchsia-500 hover:border-fuchsia-500";
        case "zinc-500":
            return "hover:text-zinc-500 hover:border-zinc-500";
        default:
            return "hover:text-green-500 hover:border-green-500";
    }
}

export const textColor = color => {
    const mainColor = color.split("-").slice(1).join("-");
    switch (mainColor) {
        case "green-500":
            return "hover:text-green-500";
        case "orange-500":
            return "hover:text-orange-500";
        case "red-500":
            return "hover:text-red-500";
        case "yellow-500":
            return "hover:text-yellow-500";
        case "cyan-500":
            return "hover:text-cyan-500";
        case "blue-500":
            return "hover:text-blue-500";
        case "fuchsia-500":
            return "hover:text-fuchsia-500";
        case "zinc-500":
            return "hover:text-zinc-500";
        default:
            return "hover:text-green-500";
    }
}
export const borderColor = color => {
    const mainColor = color.split("-").slice(1).join("-");
    switch (mainColor) {
        case "green-500":
            return "hover:border-green-500";
        case "orange-500":
            return "hover:border-orange-500";
        case "red-500":
            return "hover:border-red-500";
        case "yellow-500":
            return "hover:border-yellow-500";
        case "cyan-500":
            return "hover:border-cyan-500";
        case "blue-500":
            return "hover:border-blue-500";
        case "fuchsia-500":
            return "hover:border-fuchsia-500";
        case "zinc-500":
            return "hover:border-zinc-500";
        default:
            return "hover:border-green-500";
    }
}