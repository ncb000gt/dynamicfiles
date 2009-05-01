function main() {
    if (this.content_type) {
	res.servletResponse.setHeader("Content-Type", this.content_type);
    }
    
    res.write(this.content);
}