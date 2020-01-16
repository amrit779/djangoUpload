from django.shortcuts import render

def homeViewCsv(request):
    return render(request, 'viewCsv/homeViewCsv.html', {})