import os, glob

tripadvisor_svg = '''<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z"/></svg>'''
youtube_pattern = '''<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>'''

for file in glob.glob('*.html'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace Youtube with Tripadvisor
    content = content.replace('aria-label="YouTube"', 'aria-label="Tripadvisor"')
    content = content.replace(youtube_pattern, tripadvisor_svg)
    content = content.replace('href="#" aria-label="Tripadvisor"', 'href="https://www.tripadvisor.com/Attraction_Review-g293962-d12420194-Reviews-Maha_Lanka_Tours-Colombo_Western_Province.html" target="_blank" rel="noopener noreferrer" aria-label="Tripadvisor"')
    
    # Fix contact.html if it still has old footer info
    if 'contact.html' in file:
        content = content.replace('href="#" aria-label="Instagram"', 'href="https://www.instagram.com/mahalankatours?utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"')
        content = content.replace('href="#" aria-label="TikTok"', 'href="https://www.tiktok.com/@mahalankatours" target="_blank" rel="noopener noreferrer" aria-label="TikTok"')
        
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print('Replaced Youtube with Tripadvisor in all html files')
