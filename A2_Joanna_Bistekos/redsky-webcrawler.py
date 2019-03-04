from bs4 import BeautifulSoup
from requests import get


def get_all_links(html):
    """Gets all links from the given HTML.

    Extracts all the href links from the anchor <a> tags in the given HTML
    and append them to a list of all pages of the domain (all_links) and/or
    a list of links on the current page (links_of_this_page).

    Args:
        html: The html parsed by BeautifulSoup.    
    """
    links_of_this_page = []

    for a in html.find_all('a'):
        # Getting the value from the href value (it contains the link)
        link = a.get('href')

        if link is not None:
            # Only append if link is a domain, and isn't already in the list
            if 'www' in link and link not in links_of_this_page:
                output.write('\turl: ' + link + '\n')
                links_of_this_page.append(link)
            # Only append if link is a part of the sitemap, and isn't already
            # in the list
            if 'www.redsky.ca/' in link and link not in all_links:
                all_links.append(link)


# List of all pages of the redsky.ca domain (starts at homepage)
all_links = ['https://www.redsky.ca/']
# Opening the output file, and allowing for write
output = open("RESULT.txt", "w+")

# Go through all of the links and get any pages we may have missed
for link in all_links:
    page = get(link)
    html = BeautifulSoup(page.text, 'html.parser')

    # Getting the titles of each page
    title_tag = html.find('title')
    if title_tag is not None:
        output.write('\n' + title_tag.text + '\n')

    get_all_links(html)

output.close()
